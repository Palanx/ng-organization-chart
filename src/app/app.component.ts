import { Component } from '@angular/core';
import { NgOrganizationChartHelper } from '../ng-organization-chart-px/ng-organization-chart-helper';
import { NgOrganizationChartNodeModel } from '../ng-organization-chart-px/ng-organization-chart-node-model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-organization-chart-px';

  data = [
    {
      id: "1",
      nodeTitlePro: "Neo",
      nodeContentPro: "Domador de alpacas",
      children: [
        {
          id: "2",
          nodeTitlePro: "Diogo",
          nodeContentPro: "Domador de alpacas",
          children: [
            {
              id: "3",
              nodeTitlePro: "Higor",
              nodeContentPro: "Domador de alpacas",
              children: [
                {
                  id: "4",
                  nodeTitlePro: "Angular",
                  nodeContentPro: "Domador de alpacas",
                  children: []
                },
                {
                  id: "5",
                  nodeTitlePro: "CSS",
                  nodeContentPro: "Domador de alpacas",
                  children: []
                },
                {
                  id: "6",
                  nodeTitlePro: "HTML",
                  nodeContentPro: "Domador de alpacas",
                  children: []
                },
                {
                  id: "7",
                  nodeTitlePro: "Piadas sem graça",
                  nodeContentPro: "Domador de alpacas",
                  children: []
                },
              ]
            },
            {
              id: "8",
              nodeTitlePro: "Edson",
              nodeContentPro: "Domador de alpacas",
              children: [
                {
                  id: "9",
                  nodeTitlePro: "PHP",
                  nodeContentPro: "Domador de alpacas",
                  children: []
                },
                {
                  id: "10",
                  nodeTitlePro: "Amazon AWS",
                  nodeContentPro: "Domador de alpacas",
                  children: []
                },

              ]
            },
            {
              id: "11",
              nodeTitlePro: "Karen",
              nodeContentPro: "Domador de alpacas",
              children: [
                {
                  id: "12",
                  nodeTitlePro: "Litrão",
                  nodeContentPro: "Domador de alpacas",
                  children: []
                },
                {
                  id: "13",
                  nodeTitlePro: "Balada",
                  nodeContentPro: "Domador de alpacas",
                  children: [
                    {
                      id: "14",
                      nodeTitlePro: "Terraço Club",
                      nodeContentPro: "Domador de alpacas",
                      children: []
                    },
                  ]
                },
                {
                  id: "15",
                  nodeTitlePro: "Happy Hour",
                  nodeContentPro: "Domador de alpacas",
                  children: [
                    {
                      id: "16",
                      nodeTitlePro: "Risca faca",
                      nodeContentPro: "Domador de alpacas",
                      children: []
                    },
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]

  clickNode(node) {
    alert("Node '" + node.id + "' was clicked!");
  }

  dragNode(transfer) {
    let helper = new NgOrganizationChartHelper(this.data);
    let fnError = () => alert("To prevent a recursive dependency you can't make this change");
    let fnSuccess = () => {
      let data = helper.getData();
      this.data = data;
    };
    helper.moveNode(transfer.node.id, transfer.destination.id, fnSuccess, fnError);
  }
}
