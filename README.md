<h1> App made using React</h1>
<h2> Concepts Covered</h2>
<ol>
<li>Parcel and JSX</li>
<li>React Functional Components and Props</li>
<li>React Hooks</li>
<li>State Variables</li>
<li>Reconciliation</li>
<li>Types of Import and export in React</li>
<li>Monolith architecture and Microservices </li>
<li>Use Effect</li>  
<li>Shimmer UI</li> 
<li>React Class-Based Components</li> 
<li>Optional Chaining</li> 
<li>CORS </li> 
<li>React Routers</li> 
<li>How React communicates</li>  
<li>Custom Hooks, Lazy loading with Suspense tags and Tailwind CSS </li> 
</ol>
<br>
<h2> Parcel </h2>
<p>Parcel and Webpack are Bundlers. They bundle JS, CSS and HTML files into a bundle that is fast and optimized for production. Parcel is zero-config bundler while Webpack offers flexibility and is a complex bundler. Parcel requires no setup while webpack requires customization. Parcel is a multi-core designed bundlers which helps in parallel running of several tasks.</p>
<br>
<p> Uses of Parcel</p>
<ol> 
<li>Cache Creation which reduces build time</li>
<li>File watching Algorithm which keeps a track of changes in files</li>
<li>Hot Module replacement which refresh the page automatically</li>
<li>Provides local server</li>
<li>Development build</li>
<li>Production Build - Does Minification, bundling and compression of files</li>
<li>Tree Shaking removes unused codes</li>
<li>Image optimisation, diagnostic and error handling</li>
</ol>
<br>
<p>JSX</p>
<ul>
<li>HTML like syntax, combination of JS and HTML</li>
<li>  Camel case is used for attribute naming</li>
<li>JSX handles malicious data injected through API</li>
<li>JSX code is transpiled to react element and then to JavaScript object and finally rendered as HTML element.</li>  
<li><strong>Babel</strong> is a JS compiler who transpiles JSX to React to Javascript before code reaches JS engine.</li>
<li>For multiple line of codes wrap code in () round brackets.
<li>Element creation in JSX:  const abc = tag Heading tag</li>
</ul>
<br>
<h2> React Functional Components </h2>
<ul>
<li>Functional Component creation in JSX; const (first letter capital) Abc =()=> divtags</li>
<li>Rendering component in root: root.render(<Component/>);</li>
<li>Calling component inside component: <Component/></li>
<li>Calling elements/variable inside component: {element/variable} can be called any number of times</li>
<li>Calling functions inside component: {func()}</li>
</ul>
<br>
<p>React Props </p>
<ul> 
<li>Pass dynamic data to components</li>
<li>Data can be passed as arguments to a function</li>
<li>Syntax: {props}</li>
</ul>
<br>
<h2>React Hooks</h2>
<ol>
<li>Basically, Hooks are reusable components and functions starting with 'use' are called Hooks.<li> 
<li>They are called at the top of components or another Hooks.<li> 
<li>They are imported from React Library.<li>
<li>They can't used with a condition<li>
</ol>
<p>useEffect, useState and useParams etc. are hooks imported from React to use it in another component.</p>
<br>
<h2>State Variables</h2>
<p> State variables are super powerful variables provided by useState Hooks. With the help of state variables we can add dynamic data to our components. It is a normal JS utility function only.</p>
<br>
<ol>
<li>const [abc, setAbc] = useState(); is used to create state variables</li>
<li> To pass default value in state variables, useState([]) is used</li>
<li> To update the variable value dynamically, setAbc is used which takes the value as the parameter 'setAbc(def)'.</li>
<li> Calling a state variable, it provides an array</li>
<li> Whenever a state variable changes, react re-renders the component</li>
</ol>
<br>
<h2>Reconciliation</h2>
<p> Whenever state variables change, React fiber initiates Reconciliation</p>
<br>
<ol>
<li> Virtual DOM is a representation of actual DOM, it is like a JS object having key:"value" pairs</li>
<li>React uses Diffing algorithm and find out the difference between virtual DOMs (initial and new) and updates the actual DOM 
</li>
</ol>
<br>
<h2>Types of Import and export in React </h2>
<ol>
<li>Default Export/Import</li>
<ul>
 <li>Syntax for export : export default Component;</li>
 <li>Syntax for import : import Component from "./path";</li>
</ul>
<br>
<li>Named Export/Import</li>
<ul>
 <li>Syntax for export : export const Component;</li>
 <li>Syntax for import : import {Component} from "./path";</li>
</ul>
</ol>
<br>
<h2>Monolith architecture and Microservices</h2>
<p> In monolith architecture all are interdependent as everyone in the team works in the same project. If project is written in Java everything should be in Java.</p><br>
<p>In Microservices several small projects combine to form a big project or App.</p><br>
<p>Advantages of using Microservices Architecture</p>
<ul>
<li> Single Responsibility Principle</li>
<li> Seperation of Concerns - Everyone has single project to handle, maintain and modify.</li>
<li> Each service has its own job there is no interference so, there is no dependency.</li>
<li>There can be different languages for different services like Java for Backend, Mongo for Database, React for UI and so on..</li>
</ul>
<br>
<h2>Use Effect </h2>
<h2>Shimmer UI  </h2>
<h2>React Class-Based Components </h2>
<h2> Life-Cycle Methods of Class-Based Components</h2>
<h2>Optional Chaining</h2>
<h2> CORS </h2>
<h2> React Routers </h2>
<h2> How React communicates </h2>



<h3> More updates soon....</h3>
