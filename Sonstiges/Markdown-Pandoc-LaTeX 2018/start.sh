pandoc \
    -V lang=de-DE \
    -V papersize=A4 \
    --template ./eisvogel.tex \
    --listings \
    --verbose \
    --filter pandoc-citeproc \
    $(ls | grep '.md\|.yaml' |\
         sort) --toc -o out.pdf

