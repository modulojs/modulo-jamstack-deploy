
function prepareCallback(renderObj) {
    let data = { body: element.originalHTML };
    if (/^<scri.t(.type=.?md.?)?>/i.test(data.body)) { // Is markdown?
        // It's Markdown! Remove any "script type=md" prefixes
        let body = data.body.replace(/^<scri.t(.type=.?md.?)?>/i, '');
        // Unescape (fixes issues with using HTML as source file)
        body = body.replace(/&gt;/gi, '>').replace(/&lt;/gi, '<');
        data = modulo.registry.utils.getMarkdownData(body);
    }
    data.body = Object.assign(String(data.body), { safe: true });
    return data;
}

