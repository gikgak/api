/**
 * Feelings.js
 *
 * @description :: Describe what does the lovers feel
 * 				   Should be describe after Lover
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

Enum=function(){
	v=arguments;
	
	s={
		all:[],
		keys:v
	};
	
	for(i=v.length;i--;)
		s[v[i]]=s.all[i]=i;
		return s
	}

var feelings = Enum("HAPPY","SAD","ANGRY","TIRED","EXCITED");

var label = $("#flavor_selection_label");
label.append("<select id=\"flavor_selection_dropdown\" onchange=\"displayFlavorFrom(this)\"></select>");

var dropdown = $("#flavor_selection_dropdown");
dropdown.append("<option disabled selected>Select a feelings!</option>");

for (value in feelings.all)
    dropdown.append("<option value=\"" + value + "\">" + feelings.keys[value] + "</option>");

function displayFlavorFrom(dropdown)
{
    $("output").text(feelings.keys[dropdown.value]);
}
 
	