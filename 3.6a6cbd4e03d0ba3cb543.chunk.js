webpackJsonp([3,7],{1021:function(e,n,t){"use strict";var a=t(1);t.d(n,"a",function(){return p});var l=this&&this.__decorate||function(e,n,t,a){var l,i=arguments.length,r=i<3?n:null===a?a=Object.getOwnPropertyDescriptor(n,t):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,n,t,a);else for(var s=e.length-1;s>=0;s--)(l=e[s])&&(r=(i<3?l(r):i>3?l(n,t,r):l(n,t))||r);return i>3&&r&&Object.defineProperty(n,t,r),r},i=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},r=t(1460),s=t(1255),o=s.replace("${content}",r),c="\n    import { NgModule } from '@angular/core';\n    import { BrowserModule } from '@angular/platform-browser';\n    import { ClarityModule } from 'clarity-angular';\n    import { AppComponent } from './app.component';\n    \n    @NgModule({\n        imports: [\n            BrowserModule,\n            ClarityModule.forChild(),\n            ...\n         ],\n         declarations: [ AppComponent ],\n         bootstrap: [ AppComponent ]\n    })\n    export class AppModule {    }\n",p=function(){function e(){this.ngModuleExample=c}return e=l([t.i(a.Component)({selector:"get-started",template:o,host:{id:"main-container","[class.content-container]":"true"}}),i("design:paramtypes",[])],e)}()},1255:function(e,n){e.exports='<main id="content-area" class="content-area" hash-listener #scrollable>\n  ${content}\n</main>\n<nav class="sidenav" [clr-nav-level]="2">\n  <section class="sidenav-content">\n    <section class="nav-group" [scrollspy]="scrollable">\n      <label><a class="nav-link active" routerLink="." fragment="introduction">Clarity Design System</a></label>\n      <label class="bump-down"><a class="nav-link" routerLink="." fragment="howToUse">How to Use Clarity</a></label>\n      <ul class="nav-list">\n        <li><a class="nav-link" routerLink="." fragment="sketchTemplate">Using the Sketch Template</a></li>\n        <li><a class="nav-link" routerLink="." fragment="seedProjectClarity">Using a Clarity Seed</a></li>\n        <li><a class="nav-link" routerLink="." fragment="seedProjectAngular">Using an Angular Seed</a></li>\n      </ul>\n      <label class="bump-down"><a class="nav-link" routerLink="." fragment="browserSupport">Device &amp; Browser Support</a></label>\n      <label class="bump-down"><a class="nav-link" routerLink="." fragment="contribute_guidelines">Contributing to Clarity</a></label>\n      <label class="bump-down"><a class="nav-link" routerLink="." fragment="reportingBugs">Reporting an Issue</a></label>\n      <label class="bump-down"><a class="nav-link" routerLink="." fragment="attributions">Attributions</a></label>\n    </section>\n  </section>\n</nav>\n'},1460:function(e,n){e.exports='<h1 id="introduction">Clarity Design System</h1>\n\n<p>Project Clarity is an open source design system that brings together UX guidelines, an HTML/CSS framework, and Angular 2 components. Clarity is for both designers and developers.</p>\n\n<p>Clarity’s designs stem from continuous exploration and research. These designs are built into our HTML/CSS components, which can be used any web UI, regardless of the underlying JavaScript framework. Clarity also offers a set of well-designed and implemented\n    data-bound components built on top of Angular 2, one of the most popular JavaScript frameworks in the industry.</p>\n\n<h2 id="howToUse">How to Use Clarity</h2>\n\n<p>We offer three approaches for utilizing Clarity: UX, UX and UI, and Angular 2.</p>\n\n<h3 id="sketchTemplate">Using the Clarity Sketch UI Template</h3>\n\n<p>Jumpstart your project with the <a href="assets/images/sketchTemplates/Clarity-Template-0.8.2.sketch" target="_blank">Clarity Sketch UI template</a>, a library of components versioned alongside other products in Clarity’s ecosystem. To use with the template,\n    install the <a href="https://github.com/chrismsimpson/Metropolis" target="_blank">open-source Metropolis font</a> by Chris M. Simpson. Clarity uses these font weights: light, regular, semibold, and medium.</p>\n\n<h3 id="seedProjectClarity">Starting With a Clarity Seed Project (Recommended)</h3>\n\n<p>For a new project, the best approach is to clone the Clarity seed project and modify it to fit your needs. The seed project is integrated with clarity-ui and clarity-angular, so you don’t need to install Clarity separately.</p>\n\n<p></p>\n<ol class="list">\n    <li>Clone the seed app:\n        <pre><code class="clr-code">\ngit clone https://github.com/vmware/clarity-seed.git\n</code></pre>\n    </li>\n    <li>Install the dependencies:\n        <pre><code class="clr-code">\nnpm install\n</code></pre>\n    </li>\n    <li>Run the seed app:\n        <pre><code class="clr-code">\nnpm start\n</code></pre>\n    </li>\n</ol>\n\n<h3 id="seedProjectAngular">Using an Angular Seed Project</h3>\n\n<p>You can build an Angular 2 app, then install Clarity onto your project.</p>\n\n<h4 id="step-1-build-an-angular-2-app">Step 1: Build an Angular 2 App</h4>\n<p></p>\n<ol class="list">\n    <li>Look at the Angular 2 documentation, starting with <a href="https://angular.io/docs/ts/latest/quickstart.html">the 5 Min Quickstart</a>.</li>\n    <li>Save and modify the example structure and build, or use one of the Angular seeds:\n        <ul class="list">\n            <li><a href="https://github.com/angular/angular-cli">https://github.com/angular/angular-cli</a> (in Beta)</li>\n            <li><a href="https://github.com/mgechev/angular2-seed">https://github.com/mgechev/angular2-seed</a></li>\n            <li><a href="https://github.com/angular/angular2-seed">https://github.com/angular/angular2-seed</a> </li>\n            <li><a href="https://github.com/AngularClass/angular2-webpack-starter">https://github.com/AngularClass/angular2-webpack-starter</a></li>\n        </ul>\n    </li>\n</ol>\n\n<h4 id="installing">Step 2: Install Clarity</h4>\n\n<p>Clarity is published as three separate packages on NPM:</p>\n\n<p>\n    <a id="clarity_icons"></a>\n</p>\n<ul class="list">\n    <li><b>clarity-icons.</b> Contains the custom element icons.</li>\n    <li><b>clarity-ui.</b> Contains the static styles for building HTML components.</li>\n    <li><b>clarity-angular.</b> Contains the Angular 2 components. This package depends on clarity-ui for styles.\n    </li>\n</ul>\n\n<h5 id="step-2a-install-clarity-icons">Step 2a: Install Clarity Icons</h5>\n<p></p>\n\n<ol class="list">\n    <li>Install the Clarity Icons package through npm:\n        <pre><code class="clr-code">\nnpm install clarity-icons --save\n</code></pre>\n    </li>\n    <li>Install the polyfill for Custom Elements:\n        <pre><code class="clr-code">\nnpm install @webcomponents/custom-elements@1.0.0-alpha.3 --save\n</code></pre>\n    </li>\n    <li>(Optional) If your application supports IE10, the polyfill requires the MutationObserver shim to work. If your application does not support IE10, you can skip the following installation:\n        <pre><code class="clr-code">\nnpm install mutationobserver-shim@0.3.2 --save\n</code></pre>\n    </li>\n    <li>\n        Include clarity-icons.min.css and clarity-icons.min.js in your HTML. Because custom-elements.min.js is dependent on the Custom Elements polyfill, you must include it before clarity-icons.min.js. If your app supports IE10, include mutationobserver.min.js\n        before the polyfill:\n\n        <pre><code clr-code-highlight="language-html">\n&lt;link rel="stylesheet" href="path/to/node_modules/clarity-icons/clarity-icons.min.css"&gt;\n&lt;script src="path/to/node_modules/mutationobserver-shim/dist/mutationobserver.min.js"&gt;&lt;/script&gt;\n&lt;script src="path/to/node_modules/@webcomponents/custom-elements/custom-elements.min.js"&gt;&lt;/script&gt;\n&lt;script src="path/to/node_modules/clarity-icons/clarity-icons.min.js"&gt;&lt;/script&gt;\n</code></pre> If your site is built with <a href="https://github.com/angular/angular-cli">angular-cli</a> you can achieve the above by adding the files to the styles array and scripts array in <code class="clr-code">angular-cli.json</code>:\n        <pre><code clr-code-highlight="language-javascript">\n"styles": [\n        ...\n        "../node_modules/clarity-icons/clarity-icons.min.css",\n        ...\n],\n"scripts": [\n    ...\n    "../node_modules/mutationobserver-shim/dist/mutationobserver.min.js",\n    "../node_modules/@webcomponents/custom-elements/custom-elements.min.js",\n    "../node_modules/clarity-icons/clarity-icons.min.js"\n    ...\n]\n</code></pre>\n    </li>\n</ol>\n\n<h5 id="step-2b-install-clarity-ui">Step 2b: Install Clarity UI</h5>\n\n<p></p>\n<ol class="list">\n    <li>Install Clarity UI package through npm:\n        <pre><code class="clr-code">\nnpm install clarity-ui --save\n</code></pre>\n    </li>\n    <li>Include clarity-ui.min.css in your HTML file:\n        <pre><code clr-code-highlight="language-html">\n&lt;link rel="stylesheet" href="path/to/node_modules/clarity-ui/clarity-ui.min.css"&gt;\n</code></pre> If your site is built with <a href="https://github.com/angular/angular-cli">angular-cli</a> you can achieve the above by adding the file to the styles array in <code class="clr-code">angular-cli.json</code>:\n        <pre><code clr-code-highlight="language-javascript">\n"styles": [\n    ...\n    "../node_modules/clarity-ui/clarity-ui.min.css",\n    ...\n]\n</code></pre>\n    </li>\n    <li>Write your HTML with the Clarity CSS class names and markup.</li>\n</ol>\n\n<h5 id="step-2c-install-clarity-angular">Step 2c: Install Clarity Angular</h5>\n\n<p></p>\n<ol class="list">\n    <li>If you haven\'t already, complete steps 1 and 2 for installing Clarity UI in the preceding section.\n    </li>\n    <li>Install the clarity-angular package through npm:\n        <pre><code class="clr-code">\nnpm install clarity-angular --save\n</code></pre>\n    </li>\n    <li>Install the clarity-angular package through npm:\n        <pre><code clr-code-highlight="language-javascript">\nimport {{  \'{\'  }} NgModule {{ \'}\' }} from \'@angular/core\';\nimport {{  \'{\'  }} BrowserModule {{ \'}\' }} from \'@angular/platform-browser\';\nimport {{  \'{\'  }} ClarityModule {{ \'}\' }} from \'clarity-angular\';\nimport {{  \'{\'  }} AppComponent {{ \'}\' }} from \'./app.component\';\n\n@NgModule({{  \'{\'  }}\n    imports: [\n        BrowserModule,\n        ClarityModule.forChild(),\n        ....\n        ],\n        declarations: [ AppComponent ],\n        bootstrap: [ AppComponent ]\n{{ \'}\' }})\nexport class AppModule {{  \'{\'  }}    {{ \'}\' }}\n</code></pre>\n    </li>\n</ol>\n\n<h4 id="step-3-run-your-app">Step 3: Run Your App</h4>\n\n<pre><code class="clr-code">\nnpm start\n</code></pre>\n\n<h2 id="browserSupport">Device and Browser Support</h2>\n\n<p class="bump-down"><img src="assets/images/get-started/device_support.png" alt="Device and Browser Support" class="hidden-sm-down"></p>\n\n<ul class="hidden-md-up">\n    <li>Internet Explorer 10 &amp; 11</li>\n    <li>MS Edge</li>\n    <li>Latest versions of Chrome, Safari, and Firefox</li>\n</ul>\n\n<h2 id="contribute_guidelines">Contributing to Clarity</h2>\n\n<p>The Clarity team welcomes contributions from the community. See our <a href="https://github.com/vmware/clarity//blob/master/CONTRIBUTING.md" target="_blank">contribution guidelines</a> on GitHub.</p>\n\n<h2 id="reportingBugs">Reporting an Issue</h2>\n\n<p>Ongoing work and feature requests are tracked using <a href="https://github.com/vmware/clarity/issues" target="_blank">GitHub Issues</a>. Please feel free to file an issue.</p>\n\n<p>When submitting issues please provide a minimal app that demonstrates the issue. Fork the <a href="https://plnkr.co/8TwwdL" target="_blank">Clarity Plunker Template</a> and recreate the issue. Then submit your link with the issue.</p>\n\n<h2 id="attributions">Attributions</h2>\n\n<p>See the <a href="https://github.com/vmware/clarity/blob/master/ATTRIBUTION.md" target="_blank">legal attributions</a> for third party software included in Clarity.</p>\n\n<div style="visibility: hidden; height: 80vh;">This is a spacer to force sidenav highlighting on scroll</div>'},980:function(e,n,t){"use strict";var a=t(97),l=t(1),i=t(422),r=(t.n(i),t(423)),s=t(1021),o=t(131);t.d(n,"GetStartedModule",function(){return d});var c=this&&this.__decorate||function(e,n,t,a){var l,i=arguments.length,r=i<3?n:null===a?a=Object.getOwnPropertyDescriptor(n,t):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,n,t,a);else for(var s=e.length-1;s>=0;s--)(l=e[s])&&(r=(i<3?l(r):i>3?l(n,t,r):l(n,t))||r);return i>3&&r&&Object.defineProperty(n,t,r),r},p=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},u=[{path:"",component:s.a,data:{bodyClass:"layout-get-started",browserTitle:"Get Started"}}],d=function(){function e(){}return e=c([t.i(l.NgModule)({declarations:[s.a],imports:[a.CommonModule,i.ClarityModule.forChild(),r.a,o.c.forChild(u)],providers:[]}),p("design:paramtypes",[])],e)}()}});
//# sourceMappingURL=3.6a6cbd4e03d0ba3cb543.bundle.map