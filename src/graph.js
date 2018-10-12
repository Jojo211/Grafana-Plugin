import _from 'flot'; 
import {MetricsPanelCtrl} from 'app/plugins/sdk';

export class graph extends MetricsPanelCtrl {

  constructor($scope, $injector, $rootScope) {
    super($scope, $injector);
	
	
    };
		var dataset = { 
		
			'Donnees1':{
					label: "Données1",
					data: [[1988, 483994], [1989, 479060], [1990, 457648], [1991, 401949], [1992, 424705], [1993, 402375], [1994, 377867], [1995, 357382], [1996, 337946], [1997, 336185], [1998, 328611], [1999, 329421], [2000, 342172], [2001, 344932], [2002, 387303], [2003, 440813], [2004, 480451], [2005, 504638], [2006, 528692]]
					},
			'Donnees2':{
					label: "Données2",
					data: [[1988, 2341], [1989, 1234123], [1990, 23144], [1991, 23432], [1992, 32345], [1993, 402375], [1994, 377867], [1995, 357382], [1996, 337946], [1997, 336185], [1998, 328611], [1999, 329421], [2000, 342172], [2001, 344932], [2002, 387303], [2003, 440813], [2004, 480451], [2005, 504638], [2006, 528692]]
					},
			'Donnees3':{
					label: "Données3",
					data: [[1988, 656654], [1989, 456436], [1990, 45643], [1991, 546346], [1992, 456346], [1993, 4564356], [1994, 546346], [1995, 56346], [1996, 337946], [1997, 336185], [1998, 328611], [1999, 329421], [2000, 342172], [2001, 344932], [2002, 387303], [2003, 440813], [2004, 480451], [2005, 504638], [2006, 528692]]
					},
			
		};
			
		var panneset = {
			"Type1": [{color: "black", lineWidth: 1, xaxis: { from: 1997, to: 1997 }},{color: "black", lineWidth: 1, xaxis: { from: 1994, to: 1994 }}],	

			"Type2": [{color: "#purple", lineWidth: 1, xaxis: { from: 1998, to: 1998 }},{color: "purple", lineWidth: 1, xaxis: { from: 2000, to: 2000 }}],
				
			"Tpye3": [{color: "#B00", lineWidth: 1, xaxis: { from: 2003, to: 2003 }},{color: "#B00", lineWidth: 1, xaxis: { from: 1992, to: 1992 }}, {color: "#B00", lineWidth: 1, xaxis: { from: 1995, to: 1995 }}, {color: "#B00", lineWidth: 1, xaxis: { from: 2005, to: 2005 }},{color: "#B00", lineWidth: 1, xaxis: { from: 2001, to: 2001 }} ]								
		};

		var checkboxlabels = {
			"Type1": {
				label: "Type 1"
				},
			"Type2": {
				label: "Type 2"
				},
			"Tpye3": {
				label: "Type 3"
			}			
		};
		
		// hard-code color indices to prevent them from shifting as
		// countries are turned on/off

		var i = 0;
		$.each(dataset, function(key, val) {
			val.color = i;
			++i;
		});

		var markings = [];
		var data = [];


		var options = {
			//bars: { show: true, barWidth: 0.5, fill: 0.9 },
			xaxis: { ticksDecimals: 0 },
			yaxis: { min: 0 },
			grid: { markings: markings }
		};

		
		// insert checkboxes for panneset
		var choiceContainerPanne = $("#choicepanne");
		$.each(checkboxlabels, function(key, val) {
			choiceContainerPanne.append("<br/><input type='checkbox' name='" + key +
				"' id='id" + key + "'></input>" +
				"<label for='id" + key + "'>"
				+ val.label + "</label>");
		});
		
		// insert checkboxes for dataset
		var choiceContainerData = $("#choicedata");
		$.each(dataset, function(key, val) {
			choiceContainerData.append("<br/><input type='checkbox' name='" + key +
				"' id='id" + key + "'></input>" +
				"<label for='id" + key + "'>"
				+ val.label + "</label>");
		});

		choiceContainerPanne.find("input").click(plotAccordingToChoices);
		choiceContainerData.find("input").click(plotAccordingToChoices);


		function plotAccordingToChoices() {


			choiceContainerData.find("input:checked").each(function () {
				var key = $(this).attr("name");
				if (key && dataset[key]) {

					data.push(dataset[key]);
				}		
			});
			
			choiceContainerPanne.find("input:checked").each(function () {
				var key = $(this).attr("name");
				if (key && panneset[key]) {
				for (var i in panneset[key]){ // on tente le for each pour la tableau pannesets[key].option
					markings.push(panneset[key][i]);
					}
				}		

			});
					
			if (data.length > 0) {
				$.plot("#placeholder", data, options);
				markings.splice(0,markings.length);
				data.splice(0,data.length);

			}
		}
		plotAccordingToChoices();
  }
  
  graph.templateUrl = 'module.html';
