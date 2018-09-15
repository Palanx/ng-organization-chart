# Let's organize everything!

This is a simple Angular 6 component that you can use to render organization charts.

## Demo

Check the demo [here](https://ng-organization-chart-px.firebaseapp.com/)!

## Features

 * Render hierarchical trees
 * Show and hide node's children
 * Drag and drop node movement
 * Works with remote and local data
 * Prevent a recursive dependency

## Usage exemple

### HTML
```html
<ng-organization-chart [data]="data" (onClickNode)="clickNode($event)" (onDragNode)="dragNode($event)"></ng-organization-chart>
```
### Functions
##### Examples 
```typescript
// To do something on click
clickNode(node) {
  alert("Node '" + node.id + "' was clicked!");
}

// To transfer nodes to another when you drag and drop it
dragNode(transfer) {
  let helper = new NgOrganizationChartHelper(this.data);
  let fnError = () => alert("To prevent a recursive dependency you can't make this change");
  let fnSuccess = () => {
    let data = helper.getData();
    this.data = data;
  };
  helper.moveNode(transfer.node.id, transfer.destination.id, fnSuccess, fnError);
}
```
##### Recursive Validation
class `NgOrganizationChartHelper`
```typescript
// With this function the drag and drop is validated to prevent recursive dependecy
// You can use it anywhere as you wish
public canDropHere(nodeId, destinationNodeId):boolean
```
### Data
class `NgOrganizationChartNodeModel`

Attribute | Type
--------- | ----
id | string
nodeTitlePro | string
nodeContentPro | string
data | any
children | NgOrganizationChartNodeModel[]

##### Example
```json
[
  {
    "id": "1",
    "nodeTitlePro": "Tomás Muñiz",
    "nodeContentPro": "CEO",
    "data": { "x": 123, "y": 548, "whatever": "-15.578" },
    "children": [
      { "id": "2", "nodeTitlePro": "Person#1", "nodeContentPro": "Minion's CEO", "data": [ 1, 2, 3 ], "children": [] },
      { "id": "3", "nodeTitlePro": "Person#2", "nodeContentPro": "Minion's CEO", "data": { "img": "smile" }, "children": [] },
      { "id": "4", "nodeTitlePro": "Person#3", "nodeContentPro": "Minion's CEO", "children": [] }
    ]
  }
]
```

I'm still working on it.
