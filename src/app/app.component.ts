import { Component } from '@angular/core';
import { NgOrganizationChartHelper } from '../ng-organization-chart/ng-organization-chart-helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-organization-chart-px';

  data = [
    {
      id: 1,
      nodeTitlePro: "Neo",
      nodeContentPro: "Domagor de alpacas",
      children: [
        {
          id: 2,
          nodeTitlePro: "Diogo",
          nodeContentPro: "Domagor de alpacas",
          children: [
            {
              id: 3,
              nodeTitlePro: "Higor",
              nodeContentPro: "Domagor de alpacas",
              children: [
                {
                  id: 4,
                  nodeTitlePro: "Angular",
                  nodeContentPro: "Domagor de alpacas",
                  children: []
                },
                {
                  id: 5,
                  nodeTitlePro: "CSS",
                  nodeContentPro: "Domagor de alpacas",
                  children: []
                },
                {
                  id: 6,
                  nodeTitlePro: "HTML",
                  nodeContentPro: "Domagor de alpacas",
                  children: []
                },
                {
                  id: 7,
                  nodeTitlePro: "Piadas sem graça",
                  nodeContentPro: "Domagor de alpacas",
                  children: []
                },
              ]
            },
            {
              id: 8,
              nodeTitlePro: "Edson",
              nodeContentPro: "Domagor de alpacas",
              children: [
                {
                  id: 9,
                  nodeTitlePro: "PHP",
                  nodeContentPro: "Domagor de alpacas",
                  children: []
                },
                {
                  id: 10,
                  nodeTitlePro: "Amazon AWS",
                  nodeContentPro: "Domagor de alpacas",
                  children: []
                },

              ]
            },
            {
              id: 11,
              nodeTitlePro: "Karen",
              nodeContentPro: "Domagor de alpacas",
              children: [
                {
                  id: 12,
                  nodeTitlePro: "Litrão",
                  nodeContentPro: "Domagor de alpacas",
                  children: []
                },
                {
                  id: 13,
                  nodeTitlePro: "Balada",
                  nodeContentPro: "Domagor de alpacas",
                  children: [
                    {
                      id: 14,
                      nodeTitlePro: "Terraço Club",
                      nodeContentPro: "Domagor de alpacas",
                      children: []
                    },
                  ]
                },
                {
                  id: 15,
                  nodeTitlePro: "Happy Hour",
                  nodeContentPro: "Domagor de alpacas",
                  children: [
                    {
                      id: 16,
                      nodeTitlePro: "Risca faca",
                      nodeContentPro: "Domagor de alpacas",
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
    alert("Node '" + node.id + "' was clicked!")
  }

  dragNode(transfer) {
    let helper = new NgOrganizationChartHelper(this.data);
    helper.moveNode(transfer.node.id, transfer.destination.id);
    let data = helper.getData();
    this.data = data
  }
}
