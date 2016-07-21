System.register(['@angular/forms', '@angular/platform-browser-dynamic', './root.component'], function(exports_1) {
    var forms_1, platform_browser_dynamic_1, root_component_1;
    return {
        setters:[
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (root_component_1_1) {
                root_component_1 = root_component_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(root_component_1.RootComponent, [
                forms_1.disableDeprecatedForms(),
                forms_1.provideForms()
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7WUFJQSxvQ0FBUyxDQUFDLDhCQUFhLEVBQUU7Z0JBQ3ZCLDhCQUFzQixFQUFFO2dCQUN4QixvQkFBWSxFQUFFO2FBQ2YsQ0FBQyxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Rpc2FibGVEZXByZWNhdGVkRm9ybXMsIHByb3ZpZGVGb3Jtc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgYm9vdHN0cmFwIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcbmltcG9ydCB7IFJvb3RDb21wb25lbnQgfSBmcm9tICcuL3Jvb3QuY29tcG9uZW50JztcblxuYm9vdHN0cmFwKFJvb3RDb21wb25lbnQsIFtcbiAgZGlzYWJsZURlcHJlY2F0ZWRGb3JtcygpLFxuICBwcm92aWRlRm9ybXMoKVxuXSk7XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
