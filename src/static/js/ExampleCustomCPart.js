/*
    Use this file as a template to write your own custom Component Parts, such
    as code for a private API.

    If you have no need for custom JavaScript, feel free to ignore this file.
*/


/*
    NOTE: This file is NOT included, by default. To include, either add as a
    script tag, add the following code to the top of /static/index.html

        <Configuration
            -src="/static/js/ExampleCustomCPart.js"
        ></Configuration>
*/
modulo.registery('cpart', class ExampleCustomCPart {
    initializedCallback(renderObj) {
        console.log('initialized');
    }
    prepareCallback(renderObj) {
        console.log('prepare');
    }
    renderCallback(renderObj) {
        console.log('render');
    }
    updateCallback(renderObj) {
        console.log('update');
    }
});

