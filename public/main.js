System.register(['@angular/platform-browser-dynamic', "@angular/core", "@angular/http", "./components/root.component", "./routes"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, core_1, http_1, root_component_1, routes_1;
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
                http_1.HTTP_PROVIDERS
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBLHFCQUFjLEVBQUUsQ0FBQztZQUtqQixvQ0FBUyxDQUFPLDhCQUFhLEVBQUU7Z0JBQzlCLDZCQUFvQjtnQkFDcEIscUJBQWM7YUFDZCxDQUFDLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL2luZGV4LmQudHNcIiAvPlxuaW1wb3J0IHsgYm9vdHN0cmFwIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcbmltcG9ydCB7IFR5cGUsIGVuYWJsZVByb2RNb2RlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEhUVFBfUFJPVklERVJTIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcblxuZW5hYmxlUHJvZE1vZGUoKTtcblxuaW1wb3J0IHsgUm9vdENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvcm9vdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFQUF9ST1VURVJfUFJPVklERVJTIH0gZnJvbSBcIi4vcm91dGVzXCI7XG5cbmJvb3RzdHJhcCg8VHlwZT5Sb290Q29tcG9uZW50LCBbXG5cdEFQUF9ST1VURVJfUFJPVklERVJTLFxuXHRIVFRQX1BST1ZJREVSU1xuXSk7XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
