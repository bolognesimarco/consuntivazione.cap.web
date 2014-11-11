(function ( $ ) {
	$.fn.miotable = function(options){

		var settings = $.extend({
			headerHeight: 15,
			footerHeight: 15,
			leftWidth: 10,
			rightWidth: 10
		}, options);
		
		this.css('position','relative');
		
		var headerrow = $(document.createElement('div')).attr('id','headerrow');
		headerrow.css('bottom',(100-settings.headerHeight)+'%');
			var leftheader = $(document.createElement('div')).attr('id','leftheader');
			leftheader.css('right',(100-settings.leftWidth)+'%');
			headerrow.append(leftheader);
			
			var header = $(document.createElement('div')).attr('id','header');
			header.css('left',settings.leftWidth+'%');
			header.css('right',settings.rightWidth+'%');
			headerrow.append(header);
			
			var rightheader = $(document.createElement('div')).attr('id','rightheader');
			rightheader.css('left',(100-settings.rightWidth)+'%');
			headerrow.append(rightheader);
			
			
			
		var contentrow = $(document.createElement('div')).attr('id','contentrow');
		contentrow.css('top',settings.headerHeight+'%');
		contentrow.css('bottom',settings.footerHeight+'%');
			var leftcontent = $(document.createElement('div')).attr('id','leftcontent');
			leftcontent.css('right',(100-settings.leftWidth)+'%');
			contentrow.append(leftcontent);
			var content = $(document.createElement('div')).attr('id','content');
			content.css('left',settings.leftWidth+'%');
			content.css('right',settings.rightWidth+'%');
			contentrow.append(content);
			var rightcontent = $(document.createElement('div')).attr('id','rightcontent');
			rightcontent.css('left',(100-settings.rightWidth)+'%');
			rightcontent.on("scroll", function(event){
				document.getElementById("content").scrollTop = event.currentTarget.scrollTop;
			    document.getElementById("leftcontent").scrollTop = event.currentTarget.scrollTop;
			});
			contentrow.append(rightcontent);
		
		
			
		var footerrow = $(document.createElement('div')).attr('id','footerrow');
		footerrow.css('top',(100-settings.footerHeight)+'%');
			var leftfooter = $(document.createElement('div')).attr('id','leftfooter');
			leftfooter.css('right',(100-settings.leftWidth)+'%');
			footerrow.append(leftfooter);
			
			var footer = $(document.createElement('div')).attr('id','footer');
			footer.css('left',settings.leftWidth+'%');
			footer.css('right',settings.rightWidth+'%');
			footerrow.append(footer);
			
			var rightfooter = $(document.createElement('div')).attr('id','rightfooter');
			rightfooter.css('left',(100-settings.rightWidth)+'%');
			footerrow.append(rightfooter);
		
		this.append(headerrow);
		this.append(contentrow);
		this.append(footerrow);
						
		
//		HEADERDATA
				var headertable = $(document.createElement('div'));
				headertable.attr('class','headertable');
				header.append(headertable);
				
				var headertablerow = $(document.createElement('div'));
				headertablerow.attr('class','headertablerow');
				headertable.append(headertablerow);
				
				$.each(settings.headerData, function(i,v){
					var headercell = $(document.createElement('div'));
					headercell.attr('class','headertablecell');
					headercell.css('width',(100/settings.headerData.length)+'%');
					headercell.text(v);
					headertablerow.append(headercell);
				});
				
				
//		FOOTERDATA
				var footertable = $(document.createElement('div'));
				footertable.attr('class','footertable');
				footer.append(footertable);
				footer.on("scroll", function(event){
					document.getElementById("content").scrollLeft = event.currentTarget.scrollLeft;
				    document.getElementById("header").scrollLeft = event.currentTarget.scrollLeft;
				});
				
				var footertablerow = $(document.createElement('div'));
				footertablerow.attr('class','footertablerow');
				footertable.append(footertablerow);
				
				$.each(settings.footerData, function(i,v){
					var footercell = $(document.createElement('div'));
					footercell.attr('class','footertablecell');
					footercell.css('width',(100/settings.footerData.length)+'%');
					footercell.text(v);
					footertablerow.append(footercell);
				});
				
				

//		LEFTDATA

				$.each(settings.leftData, function(i,v){
					
					var leftcell = $(document.createElement('div'));
					leftcell.attr('class','leftcell');
					leftcell.css('height',(100/settings.leftData.length)+'%');


					var leftcelltable = $(document.createElement('div'));
					leftcelltable.attr('class','leftcelltable');
					leftcell.append(leftcelltable);
					
					var leftcelltablerow = $(document.createElement('div'));
					leftcelltablerow.attr('class','leftcelltablerow');
					leftcelltable.append(leftcelltablerow);
					
					var leftcelltablecell = $(document.createElement('div'));
					leftcelltablecell.attr('class','leftcelltablecell');
					leftcelltablecell.text(v);
					leftcelltablerow.append(leftcelltablecell);
					
					leftcontent.append(leftcell);

				});
				
//		RIGHTDATA
				$.each(settings.rightData, function(i,v){
					
					var rightcell = $(document.createElement('div'));
					rightcell.attr('class','rightcell');
					rightcell.css('height',(100/settings.rightData.length)+'%');
					
					
					var rightcelltable = $(document.createElement('div'));
					rightcelltable.attr('class','rightcelltable');
					rightcell.append(rightcelltable);
					
					var rightcelltablerow = $(document.createElement('div'));
					rightcelltablerow.attr('class','rightcelltablerow');
					rightcelltable.append(rightcelltablerow);
					
					var rightcelltablecell = $(document.createElement('div'));
					rightcelltablecell.attr('class','rightcelltablecell');
					rightcelltablecell.text(v);
					rightcelltablerow.append(rightcelltablecell);
					
					rightcontent.append(rightcell);

				});
				
//		CONTENT DATA				
				$.each(settings.contentData, function(i, v){
					var contentcontentrow = $(document.createElement('div'));
					contentcontentrow.attr('class','contentcontentrow');
					contentcontentrow.css('height',(100/settings.contentData.length)+'%');
					content.append(contentcontentrow);
					
					var contentcontenttable = $(document.createElement('div'));
					contentcontenttable.attr('class','contentcontenttable');
					contentcontentrow.append(contentcontenttable);
					
					var contentcontenttablerow = $(document.createElement('div'));
					contentcontenttablerow.attr('class','contentcontenttablerow');
					contentcontenttable.append(contentcontenttablerow);
					
					$.each(v.elements, function(ie,ve){	
						var contentcontenttablecell = $(document.createElement('div'));
						contentcontenttablecell.attr('class','contentcontenttablecell');
						contentcontenttablecell.css('width',(100/v.elements.length)+'%');
						contentcontenttablecell.text(ve);
						contentcontenttablerow.append(contentcontenttablecell);
					});
				});
				
				
				
				
				
//					var divmese = $(document.createElement('div'));
//					divmese.attr('class','mt_headerrow_center_table_row_cell');
//					divmese.text(mesiDesc[data.getMonth()]+'-'+(data.getYear()+1900));
//					mt_headerrow_center_table_row.append(divmese);
//				});
//				
//				
//				
//				
//				$.each(ordini, function(i,v){
//					var mt_contentrow_left_table_row = $(document.createElement('div'));
//					mt_contentrow_left_table_row.attr('class','mt_contentrow_left_table_row');
//					if(i%2==0){
//						mt_contentrow_left_table_row.attr('style','background-color: yellow');
//					}else{
//						mt_contentrow_left_table_row.attr('style','background-color: green');
//					}
//					mt_contentrow_left_table.append(mt_contentrow_left_table_row);
//						var mt_contentrow_left_table_row_cell = $(document.createElement('div'));
//						mt_contentrow_left_table_row_cell.attr('class','mt_contentrow_left_table_row_cell');
//						mt_contentrow_left_table_row.append(mt_contentrow_left_table_row_cell);
//						mt_contentrow_left_table_row_cell.text(v.worker.name+' '+v.id);
//
//					var mt_contentrow_center_table_row = $(document.createElement('div'));
//					mt_contentrow_center_table_row.attr('class','mt_contentrow_center_table_row');
//					mt_contentrow_center_table.append(mt_contentrow_center_table_row);
//					if(i%2==0){
//						mt_contentrow_center_table_row.attr('style','background-color: yellow');
//					}else{
//						mt_contentrow_center_table_row.attr('style','background-color: green');
//					}
//					var reportentryordine = true;
//					while(reportentryordine && data.length>0){
//						if(data[0].order.id==v.id){
//							$.each(mesi, function(im,vm){
//								if(data.length>0 && data[0].timeSheet.endDate==vm && data[0].order.id==v.id){
//									var mt_contentrow_center_table_row_cell = $(document.createElement('div'));
//									mt_contentrow_center_table_row_cell.attr('class','mt_contentrow_center_table_row_cell');
//									mt_contentrow_center_table_row_cell.append(reportdiv(data[0]));
//									mt_contentrow_center_table_row.append(mt_contentrow_center_table_row_cell);
//									data.shift();
//								}else{
//									var mt_contentrow_center_table_row_cell = $(document.createElement('div'));
//									mt_contentrow_center_table_row_cell.attr('class','mt_contentrow_center_table_row_cell');
//									mt_contentrow_center_table_row.append(mt_contentrow_center_table_row_cell);
//								}
//							});
//							
//						}else{
//							reportentryordine=false;
//						}
//					}
//					
//					
//					var mt_contentrow_right_table_row = $(document.createElement('div'));
//					mt_contentrow_right_table_row.attr('class','mt_contentrow_right_table_row');
//					if(i%2==0){
//						mt_contentrow_right_table_row.attr('style','background-color: yellow');
//					}else{
//						mt_contentrow_right_table_row.attr('style','background-color: green');
//					}
//					mt_contentrow_right_table.append(mt_contentrow_right_table_row);
//						var mt_contentrow_right_table_row_cell = $(document.createElement('div'));
//						mt_contentrow_right_table_row_cell.attr('class','mt_contentrow_right_table_row_cell');
//						mt_contentrow_right_table_row.append(mt_contentrow_right_table_row_cell);
//						mt_contentrow_right_table_row_cell.text(v.leftDays);
//				});
//				
//				/* TEMP */
//				$.each(mesi, function(i,v){
//					var data = new Date(v);
//					var divmese = $(document.createElement('div'));
//					divmese.attr('class','mt_footerrow_center_table_row_cell');
//					divmese.text(mesiDesc[data.getMonth()]+'-'+(data.getYear()+1900));
//					mt_footerrow_center_table_row.append(divmese);
//				});
//				
//				
//		this.append(mt);
	};
}(jQuery));






function reportdiv(divcontent){
	var div = $(document.createElement('div'));
	var table = $(document.createElement('table'));
	var rowgiorni = $(document.createElement('tr'));
	rowgiorni.append($(document.createElement('td')).text("Giorni:"));
	rowgiorni.append($(document.createElement('td')).text(divcontent.days));
	var roweuro = $(document.createElement('tr'));
	var tdeuro = $(document.createElement('td')).text("Euro:");
	tdeuro.attr('class','label');
	roweuro.append(tdeuro);
	
	roweuro.append($(document.createElement('td')).text((divcontent.days*divcontent.order.rate)));
	var rowinvoice = $(document.createElement('tr'));
	rowinvoice.append($(document.createElement('td')).text("Fattura"));
	if(divcontent.invoice!=null){
		var tdinvoice = $(document.createElement('td'));
		tdinvoice.attr('style','white-space: nowrap');
		rowinvoice.append(tdinvoice.text(divcontent.invoice.id+" del "+divcontent.invoice.date));
	}else{
		var checkbox = $(document.createElement('input'));
		checkbox.attr('type','checkbox');
		checkbox.attr('name','toinvoice');
		checkbox.attr('value',divcontent.id);
		rowinvoice.append($(document.createElement('td')).append(checkbox));
	}
	
	table.append(rowgiorni);
	table.append(roweuro);
	table.append(rowinvoice);
	div.append(table);
	return div;
}