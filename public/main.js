System.register(['@angular/platform-browser-dynamic', "@angular/core", "@angular/http", '@angular/forms', "./components/root.component", "./routes"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, core_1, http_1, forms_1, root_component_1, routes_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (root_component_1_1) {
                root_component_1 = root_component_1_1;
            },
            function (routes_1_1) {
                routes_1 = routes_1_1;
            }],
        execute: function() {
            core_1.enableProdMode();
            platform_browser_dynamic_1.bootstrap(root_component_1.RootComponent, [
                routes_1.APP_ROUTER_PROVIDERS,
                http_1.HTTP_PROVIDERS,
                forms_1.disableDeprecatedForms(),
                forms_1.provideForms()]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BLHFCQUFjLEVBQUUsQ0FBQztZQUtqQixvQ0FBUyxDQUFPLDhCQUFhLEVBQUU7Z0JBQzlCLDZCQUFvQjtnQkFDcEIscUJBQWM7Z0JBQ2QsOEJBQXNCLEVBQUU7Z0JBQ3hCLG9CQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL2luZGV4LmQudHNcIiAvPlxuaW1wb3J0IHsgYm9vdHN0cmFwIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcbmltcG9ydCB7IFR5cGUsIGVuYWJsZVByb2RNb2RlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEhUVFBfUFJPVklERVJTIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7cHJvdmlkZUZvcm1zLCBkaXNhYmxlRGVwcmVjYXRlZEZvcm1zfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmVuYWJsZVByb2RNb2RlKCk7XG5cbmltcG9ydCB7IFJvb3RDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3Jvb3QuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBUFBfUk9VVEVSX1BST1ZJREVSUyB9IGZyb20gXCIuL3JvdXRlc1wiO1xuXG5ib290c3RyYXAoPFR5cGU+Um9vdENvbXBvbmVudCwgW1xuXHRBUFBfUk9VVEVSX1BST1ZJREVSUyxcblx0SFRUUF9QUk9WSURFUlMsXG5cdGRpc2FibGVEZXByZWNhdGVkRm9ybXMoKSxcblx0cHJvdmlkZUZvcm1zKCldKTtcblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
