/**
* Created with introduction-to-html.
* User: mathvdh
* Date: 2015-07-06
* Time: 11:41 AM
* To change this template use Tools | Templates.
*/

/**
 * HSV to RGB color conversion
 *
 * H runs from 0 to 360 degrees
 * S and V run from 0 to 100
 * 
 * Ported from the excellent java algorithm by Eugene Vishnevsky at:
 * http://www.cs.rit.edu/~ncs/color/t_convert.html
 */
function hsvToRgb(h, s, v) {
	var r, g, b;
	var i;
	var f, p, q, t;
	
	// Make sure our arguments stay in-range
	h = Math.max(0, Math.min(360, h));
	s = Math.max(0, Math.min(100, s));
	v = Math.max(0, Math.min(100, v));
	
	// We accept saturation and value arguments from 0 to 100 because that's
	// how Photoshop represents those values. Internally, however, the
	// saturation and value are calculated from a range of 0 to 1. We make
	// That conversion here.
	s /= 100;
	v /= 100;
	
	if(s == 0) {
		// Achromatic (grey)
		r = g = b = v;
		return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
	}
	
	h /= 60; // sector 0 to 5
	i = Math.floor(h);
	f = h - i; // factorial part of h
	p = v * (1 - s);
	q = v * (1 - s * f);
	t = v * (1 - s * (1 - f));

	switch(i) {
		case 0:
			r = v;
			g = t;
			b = p;
			break;
			
		case 1:
			r = q;
			g = v;
			b = p;
			break;
			
		case 2:
			r = p;
			g = v;
			b = t;
			break;
			
		case 3:
			r = p;
			g = q;
			b = v;
			break;
			
		case 4:
			r = t;
			g = p;
			b = v;
			break;
			
		default: // case 5:
			r = v;
			g = p;
			b = q;
	}
	
	return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function randomColors(total)
{
    var i = 360 / (total - 1); // distribute the colors evenly on the hue range
    var r = []; // hold the generated colors
    for (var x=0; x<total; x++)
    {
        r.push(hsvToRgb(i * x, 100, 100)); // you can also alternate the saturation and value for even more contrast between the colors
    }
    return r;
}

function visualizehead(selector, content) {
                            
    var parser = new DOMParser();
    var doc = parser.parseFromString(content, "text/html");
    
    $(selector).html("");
    
    $.each(doc.children[0].children[0].children,function(idx, item){
        
        $(selector).append("<div class=\"headelem\"><div class=\"top-label\"> &lt;"+item.tagName+"&gt; </div>"+item.text+"<div class=\"bottom-label\"> &lt;/"+item.tagName+"&gt; </div></div>");
        
    })
    
}

function visualizebody(selector, content) {
  
    var elems = [];
    
    var inlines = ["a","span","strong","b","i","u"]
    
    $(selector).html(content);
    
    var level = $(selector);
    

    while (level.children().length) {
        level = level.children().each(function (_, el) {
            elems.push($(el));
        })
    }
    
    
    var colors = randomColors(elems.length);
    var cnt=0;
    elems.forEach(function($e) {
        
        var cstring = "rgb("+colors[cnt][0]+","+colors[cnt][1]+","+colors[cnt][2]+")";
        var cstringa = "rgba("+colors[cnt][0]+","+colors[cnt][1]+","+colors[cnt][2]+", 0.3 )";
        
        var tagname = $e.prop("tagName").toLowerCase();
        
        if ($.inArray(tagname,inlines) != -1) {
            if (($e.css("position") != "absolute")&&($e.css("position") != "relative")) {
                $e.css("position","relative");    
            }

            
            $e.css("border","2px solid "+cstring);
            $e.prepend("<span class=\"left-label\"> &lt;"+tagname+"&gt; </span>")
            $e.prepend("<span class=\"right-label\"> &lt;/"+tagname+"&gt; </span>")
            $e.addClass("bodyeleminline")
            
            
        } else {
            if (($e.css("position") != "absolute")&&($e.css("position") != "relative")) {
                $e.css("position","relative");    
            }

            $e.addClass("bodyelem")

            $e.css("border","2px solid "+cstring);
            $e.css("background-image","linear-gradient("+cstringa+","+cstringa+"),linear-gradient(#ccc, #ccc)");

            $e.prepend("<div class=\"top-label\"> &lt;"+tagname+"&gt; </div>")
            $e.prepend("<div class=\"bottom-label\"> &lt;/"+tagname+"&gt; </div>")

            
        }
        
        cnt++;
        
    })
}
