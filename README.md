# Stage 01
createElement()
==========
In an HTML document, the Document.createElement() method creates the specified HTML element or an HTMLUnknownElement if the given element name isn't a known one.

In a XUL document, it creates the specified XUL element.

In other documents, it creates an element with a null namespace URI.

Syntax
var element = document.createElement(tagName[, options]);
element is the created Element object.
tagName is a string that specifies the type of element to be created. The nodeName of the created element is initialized with the value of tagName. Don't use qualified names (like "html:a") with this method.
options is an optional ElementCreationOptions object. If this object is defined and has an is property, the is attribute of the created element is initalized with the value of this property. If the object has no is property, the value is null.

Example 01
This creates a new <div> and inserts it before the element with the ID "div1".

HTML

<!DOCTYPE html>
<html>
<head>
  <title>||Working with elements||</title>
</head>
<body>
  <div id="div1">The text above has been created dynamically.</div>
</body>
</html>

JavaScript

document.body.onload = addElement;

function addElement () {
  // create a new div element
  // and give it some content
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode("Hi there and greetings!");
  newDiv.appendChild(newContent); //add the text node to the newly created div.

  // add the newly created element and its content into the DOM
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}


When called on a document object flagged as an HTML document, createElement() lower-cases its argument prior to creating the element.

To create an element with a qualified name and namespace URI, use document.createElementNS() instead.

Node.insertBefore()
=============
The Node.insertBefore() method inserts the specified node before the reference node as a child of the current node.

Syntax
var insertedNode = parentNode.insertBefore(newNode, referenceNode);
If referenceNode is null, the newNode is inserted at the end of the list of child nodes.

Note that referenceNode is not an optional parameter -- you must explicitly pass a Node or null. Failing to provide it or passing invalid values may behave differently in different browser versions.

The returned value is the inserted node.

Example 02

<div id="parentElement">
   <span id="childElement">foo bar</span>
</div>

<script>
//Create the new node to insert
var newNode = document.createElement("span");

//Get a reference to the parent node
var parentDiv = document.getElementById("childElement").parentNode;

//Begin test case [ 1 ] : Exist a childElement --> All working correctly
var sp2 = document.getElementById("childElement");
parentDiv.insertBefore(newNode,sp2);
//End test case [ 1 ]

//Begin test case [ 2 ] : childElement is of Type undefined
var sp2 = undefined; //Not exist a node of id "childElement"
parentDiv.insertBefore(newNode,sp2); //implicit dynamic cast to type Node
//End test case [ 2 ]

//Begin test case [ 3 ] : childElement is of Type "undefined" ( string )
var sp2 = "undefined"; //Not exist a node of id "childElement"
parentDiv.insertBefore(newNode,sp2); //Generate "Type Error: Invalid Argument"
//End test case [ 3 ]
</script>

insertedNode The node being inserted, that is newNode
parentNode The parent of the newly inserted node.
newNode The node to be inserted.
referenceNode The node before which newNode is inserted.

Example 03
<div id="parentElement">
  <span id="childElement">foo bar</span>
</div>

<script>
// Create a new, plain <span> element
var sp1 = document.createElement("span");

// Get a reference to the element, before we want to insert the element
var sp2 = document.getElementById("childElement");
// Get a reference to the parent element
var parentDiv = sp2.parentNode;

// Insert the new element into the DOM before sp2
parentDiv.insertBefore(sp1, sp2);
</script>

There is no insertAfter method. It can be emulated by combining the insertBefore method with nextSibling.

In the previous example, sp1 could be inserted after sp2 using:

parentDiv.insertBefore(sp1, sp2.nextSibling);
If sp2 does not have a next sibling, then it must be the last child — sp2.nextSibling returns null, and sp1 is inserted at the end of the child node list (immediately after sp2).

Example 04
Insert an element before the first child element, using the firstChild property.

// Get a reference to the element in which we want to insert a new node
var parentElement = document.getElementById('parentElement');
// Get a reference to the first child
var theFirstChild = parentElement.firstChild;

// Create a new element
var newElement = document.createElement("div");

// Insert the new element before the first child
parentElement.insertBefore(newElement, theFirstChild);

When the element does not have a first child, then firstChild is null. The element is still appended to the parent, after the last child. Since the parent element did not have a first child, it did not have a last child either. Consequently, the new element is the only element, after insertion.

Node.appendChild()

The Node.appendChild() method adds a node to the end of the list of children of a specified parent node. If the given child is a reference to an existing node in the document, appendChild() moves it from its current position to the new position (there is no requirement to remove the node from its parent node before appending it to some other node).

This means that a node can't be in two points of the document simultaneously. So if the node already has a parent, the node is first removed, then appended at the new position. The Node.cloneNode() can be used to make a copy of the node before appending it under the new parent. Note that the copies made with cloneNode will not be automatically kept in sync.

This method is not allowed to move nodes between different documents. If you want to append node from a different document the document.importNode() method must be used.

Syntax
var aChild = element.appendChild(aChild);
The returned value is the appended child.

Example
// Create a new paragraph element, and append it to the end of the document body
var p = document.createElement("p");
document.body.appendChild(p);

Node.hasChildNodes()

The Node.hasChildNodes() method returns a Boolean value indicating whether the current Node has child nodes or not.

Syntax
node.hasChildNodes()
Examples
The next example removes the first child node inside the element with the id "foo" if foo has child nodes.

var foo = document.getElementById("foo");

if ( foo.hasChildNodes() ) {
  foo.removeChild( foo.childNodes[0] );
}

Node.replaceChild()
The Node.replaceChild() method replaces one child node of the specified node with another.

Syntax
replacedNode = parentNode.replaceChild(newChild, oldChild);
newChild is the new node to replace oldChild. If it already exists in the DOM, it is first removed.
oldChild is the existing child to be replaced.
replacedNode is the replaced node. This is the same node as oldChild.

Example 05

// <div>
//  <span id="childSpan">foo bar</span>
// </div>

// create an empty element node
// without an ID, any attributes, or any content
var sp1 = document.createElement("span");

// give it an id attribute called 'newSpan'
sp1.id = "newSpan";

// create some content for the new element.
var sp1_content = document.createTextNode("new replacement span element.");

// apply that content to the new element
sp1.appendChild(sp1_content);

// build a reference to the existing node to be replaced
var sp2 = document.getElementById("childSpan");
var parentDiv = sp2.parentNode;

// replace existing node sp2 with the new span element sp1
parentDiv.replaceChild(sp1, sp2);

// result:
// <div>
//   <span id="newSpan">new replacement span element.</span>
// </div>


Node.removeChild()
The Node.removeChild() method removes a child node from the DOM. Returns removed node.

Syntax

var oldChild = node.removeChild(child);
OR
element.removeChild(child);

child is the child node to be removed from the DOM.
node is the parent node of child.
oldChild holds a reference to the removed child node. oldChild === child.
The removed child node still exists in memory, but is no longer part of the DOM.  With the first syntax-form shown, you may reuse the removed node later in your code, via the oldChild object reference.  In the second syntax-form however, there is no oldChild reference kept, so assuming your code has not kept any other reference to the node elsewhere, it will immediately become unusable and irretrievable, and will usually be automatically deleted from memory after a short time.

If child is actually not a child of the element node, the method throws an exception. This will also happen if child was in fact a child of element at the time of the call, but was removed by an event handler invoked in the course of trying to remove the element (eg, blur.)

The method throws an exception in 2 different ways:

If the child was in fact a child of element and so existing on the DOM, but was removed the method throws the following exception:

​​Uncaught NotFoundError: Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.

If the child doesn't exist on the DOM of the page, the method throws the following exception:

Uncaught TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.

Examples 06
<!--Sample HTML code-->
<div id="top" align="center"> </div>

<script type="text/javascript">
      var top = document.getElementById("top");
      var nested = document.getElementById("nested");

      var garbage = top.removeChild(nested);    //Test Case 2: the method throws the exception (2)

</script>

Examples 07
<!--Sample HTML code-->
<div id="top" align="center">
 <div id="nested"></div>
</div>

<script type="text/javascript">
      var top = document.getElementById("top");
      var nested = document.getElementById("nested");

      var garbage = top.removeChild(nested); // This first call remove correctly the node

      // ......
      garbage = top.removeChild(nested);   // Test Case 1: the method in the second call here, throws the exception (1)

</script>

Examples 08
<!--Sample HTML code-->

<div id="top" align="center">
  <div id="nested"></div>
</div>
// Removing a specified element when knowing its parent node
var d = document.getElementById("top");
var d_nested = document.getElementById("nested");
var throwawayNode = d.removeChild(d_nested);
// Removing a specified element without having to specify its parent node
var node = document.getElementById("nested");
if (node.parentNode) {
  node.parentNode.removeChild(node);
}
// Removing all children from an element
var element = document.getElementById("top");
while (element.firstChild) {
  element.removeChild(element.firstChild);
}
