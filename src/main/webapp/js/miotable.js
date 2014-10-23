var mesiDesc = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];

function reportSorter(a,b){
	if(a.order.id==b.order.id){ 
		return a.timeSheet.endDate-b.timeSheet.endDate;
	}else{
		return a.order.id-b.order.id;
	}
}

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


(function ( $ ) {
	$.fn.miotable = function(data, options){

		var settings = $.extend({
			
		}, options);
		
		var mt = $(document.createElement('div'));
		mt.attr('class','mt');
		
			var mt_headerrow = $(document.createElement('div'));
			mt_headerrow.attr('class','mt_headerrow');
			mt.append(mt_headerrow);
				var mt_headerrow_left = $(document.createElement('div'));
				mt_headerrow_left.attr('class','mt_headerrow_left');
				mt_headerrow.append(mt_headerrow_left);
				var mt_headerrow_center = $(document.createElement('div'));
				mt_headerrow_center.attr('class','mt_headerrow_center');
				mt_headerrow.append(mt_headerrow_center);
					var mt_headerrow_center_table = $(document.createElement('div'));
					mt_headerrow_center_table.attr('class','mt_headerrow_center_table');
					mt_headerrow_center.append(mt_headerrow_center_table);
						var mt_headerrow_center_table_row = $(document.createElement('div'));
						mt_headerrow_center_table_row.attr('class','mt_headerrow_center_table_row');
						mt_headerrow_center_table.append(mt_headerrow_center_table_row);
				var mt_headerrow_right = $(document.createElement('div'));
				mt_headerrow_right.attr('class','mt_headerrow_right');
				mt_headerrow_right.text("Residuo");
				mt_headerrow.append(mt_headerrow_right);

			var mt_contentrow = $(document.createElement('div'));
			mt_contentrow.attr('class','mt_contentrow');
			mt.append(mt_contentrow);
				var mt_contentrow_left = $(document.createElement('div'));
				mt_contentrow_left.attr('class','mt_contentrow_left');
				mt_contentrow.append(mt_contentrow_left);
					var mt_contentrow_left_table = $(document.createElement('div'));
					mt_contentrow_left_table.attr('class','mt_contentrow_left_table');
					mt_contentrow_left.append(mt_contentrow_left_table);
				var mt_contentrow_center = $(document.createElement('div'));
				mt_contentrow_center.attr('class','mt_contentrow_center');
					var mt_contentrow_center_table = $(document.createElement('div'));
					mt_contentrow_center_table.attr('class','mt_contentrow_center_table');
					mt_contentrow_center.append(mt_contentrow_center_table);
				mt_contentrow.append(mt_contentrow_center);
				var mt_contentrow_right = $(document.createElement('div'));
				mt_contentrow_right.attr('class','mt_contentrow_right');
					var mt_contentrow_right_table = $(document.createElement('div'));
					mt_contentrow_right_table.attr('class','mt_contentrow_right_table');
					mt_contentrow_right.append(mt_contentrow_right_table);
				mt_contentrow.append(mt_contentrow_right);
				
			var mt_footerrow = $(document.createElement('div')); 
			mt_footerrow.attr('class','mt_footerrow');
			mt.append(mt_footerrow);
				var mt_footerrow_left = $(document.createElement('div'));
				mt_footerrow_left.attr('class','mt_footerrow_left');
				mt_footerrow.append(mt_footerrow_left);
				var mt_footerrow_center = $(document.createElement('div'));
				mt_footerrow_center.attr('class','mt_footerrow_center');
				mt_footerrow_center.on("scroll", function(event){
					document.getElementsByClassName("mt_contentrow_center")[0].scrollLeft = event.currentTarget.scrollLeft;
				    document.getElementsByClassName("mt_headerrow_center")[0].scrollLeft = event.currentTarget.scrollLeft;
				});
				mt_footerrow.append(mt_footerrow_center);
					var mt_footerrow_center_table = $(document.createElement('div'));
					mt_footerrow_center_table.attr('class','mt_footerrow_center_table');
					mt_footerrow_center.append(mt_footerrow_center_table);
						var mt_footerrow_center_table_row = $(document.createElement('div'));
						mt_footerrow_center_table_row.attr('class','mt_footerrow_center_table_row');
						mt_footerrow_center_table.append(mt_footerrow_center_table_row);
				var mt_footerrow_right = $(document.createElement('div'));
				mt_footerrow_right.attr('class','mt_footerrow_right');
				mt_footerrow.append(mt_footerrow_right);
				
				
				
				var ordiniid = [];
				var ordini = [];
				var mesi = [];
				data.sort(reportSorter);
				
				$.each(data, function() {
					
					if($.inArray(this.order.id, ordiniid)==-1){	
						ordiniid.push(this.order.id);
						ordini.push(this.order);
					}
					if($.inArray(this.timeSheet.endDate, mesi)==-1){
						mesi.push(this.timeSheet.endDate);
					}
				});
				mesi.sort();
				
				
				
				$.each(mesi, function(i,v){
					var data = new Date(v);
					var divmese = $(document.createElement('div'));
					divmese.attr('class','mt_headerrow_center_table_row_cell');
					divmese.text(mesiDesc[data.getMonth()]+'-'+(data.getYear()+1900));
					mt_headerrow_center_table_row.append(divmese);
				});
				
				
				
				
				$.each(ordini, function(i,v){
					var mt_contentrow_left_table_row = $(document.createElement('div'));
					mt_contentrow_left_table_row.attr('class','mt_contentrow_left_table_row');
					mt_contentrow_left_table.append(mt_contentrow_left_table_row);
						var mt_contentrow_left_table_row_cell = $(document.createElement('div'));
						mt_contentrow_left_table_row_cell.attr('class','mt_contentrow_left_table_row_cell');
						mt_contentrow_left_table_row.append(mt_contentrow_left_table_row_cell);
						mt_contentrow_left_table_row_cell.text(v.worker.name+' '+v.id);

					var mt_contentrow_center_table_row = $(document.createElement('div'));
					mt_contentrow_center_table_row.attr('class','mt_contentrow_center_table_row');
					mt_contentrow_center_table.append(mt_contentrow_center_table_row);
					var reportentryordine = true;
					while(reportentryordine && data.length>0){
						if(data[0].order.id==v.id){
							$.each(mesi, function(im,vm){
								if(data.length>0 && data[0].timeSheet.endDate==vm && data[0].order.id==v.id){
									var mt_contentrow_center_table_row_cell = $(document.createElement('div'));
									mt_contentrow_center_table_row_cell.attr('class','mt_contentrow_center_table_row_cell');
									mt_contentrow_center_table_row_cell.append(reportdiv(data[0]));
									mt_contentrow_center_table_row.append(mt_contentrow_center_table_row_cell);
									data.shift();
								}else{
									var mt_contentrow_center_table_row_cell = $(document.createElement('div'));
									mt_contentrow_center_table_row_cell.attr('class','mt_contentrow_center_table_row_cell');
									mt_contentrow_center_table_row.append(mt_contentrow_center_table_row_cell);
								}
							});
							
						}else{
							reportentryordine=false;
						}
					}
					
					
					var mt_contentrow_right_table_row = $(document.createElement('div'));
					mt_contentrow_right_table_row.attr('class','mt_contentrow_right_table_row');
					mt_contentrow_right_table.append(mt_contentrow_right_table_row);
						var mt_contentrow_right_table_row_cell = $(document.createElement('div'));
						mt_contentrow_right_table_row_cell.attr('class','mt_contentrow_right_table_row_cell');
						mt_contentrow_right_table_row.append(mt_contentrow_right_table_row_cell);
						mt_contentrow_right_table_row_cell.text(v.leftDays);
				});
				
				/* TEMP */
				$.each(mesi, function(i,v){
					var data = new Date(v);
					var divmese = $(document.createElement('div'));
					divmese.attr('class','mt_footerrow_center_table_row_cell');
					divmese.text(mesiDesc[data.getMonth()]+'-'+(data.getYear()+1900));
					mt_footerrow_center_table_row.append(divmese);
				});
				
				
		this.append(mt);
	};
}(jQuery));