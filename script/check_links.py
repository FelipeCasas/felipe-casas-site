#!/usr/bin/env python3
"""Check that built HTML has no broken internal links and every project page exists."""
import re
import sys
from pathlib import Path
from urllib.parse import unquote

site = Path(sys.argv[1] if len(sys.argv) > 1 else "_site")
base = "/felipe-casas-site"
href_re = re.compile(r"""(?:href|src)\s*=\s*["']([^"']+)["']""", re.I)
missing = []
htmls = list(site.rglob("*.html"))
if not htmls:
    print("no html under", site)
    sys.exit(1)
for html in htmls:
    text = html.read_text(errors="replace")
    if "Liquid error" in text:
        missing.append(f"liquid error in {html}")
    for url in href_re.findall(text):
        if url.startswith(("http://", "https://", "mailto:", "data:", "#")):
            continue
        path = unquote(url.split("#")[0].split("?")[0])
        if not path:
            continue
        if path.startswith(base):
            path = path[len(base):] or "/"
        target = site / path.strip("/")
        if path.endswith("/") or path == "/":
            target = site / path.strip("/") / "index.html"
        if target.is_dir():
            target = target / "index.html"
        if not target.exists():
            missing.append(f"{html.relative_to(site)} -> {url}")
for line in missing:
    print(line)
print(f"{len(htmls)} pages, {len(missing)} problems")
sys.exit(1 if missing else 0)
