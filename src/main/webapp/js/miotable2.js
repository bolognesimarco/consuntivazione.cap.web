(function ( $ ) {
	$.fn.miotable = function(data, options){

		var settings = $.extend({
			
		}, options);
		
		this.css('position','relative');
		
		var headerrow = $(document.createElement('div')).attr('id','headerrow');
			var leftheader = $(document.createElement('div')).attr('id','leftheader');
			headerrow.append(leftheader);
			
			var header = $(document.createElement('div')).attr('id','header');
			headerrow.append(header);
			
			var rightheader = $(document.createElement('div')).attr('id','rightheader');
			headerrow.append(rightheader);
			
			
			
		var contentrow = $(document.createElement('div')).attr('id','contentrow');
			var leftcontent = $(document.createElement('div')).attr('id','leftcontent');
			contentrow.append(leftcontent);
			var content = $(document.createElement('div')).attr('id','content');
			contentrow.append(content);
			var rightcontent = $(document.createElement('div')).attr('id','rightcontent');
			contentrow.append(rightcontent);
		
		
			
		var footerrow = $(document.createElement('div')).attr('id','footerrow');
			var leftfooter = $(document.createElement('div')).attr('id','leftfooter');
			footerrow.append(leftfooter);
			
			var footer = $(document.createElement('div')).attr('id','footer');
			footerrow.append(footer);
			
			var rightfooter = $(document.createElement('div')).attr('id','rightfooter');
			footerrow.append(rightfooter);
		
		this.append(headerrow);
		this.append(contentrow);
		this.append(footerrow);
				
				
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
				
				var headertable = $(document.createElement('div'));
				headertable.attr('class','headertable');
				header.append(headertable);
				
				var headertablerow = $(document.createElement('div'));
				headertablerow.attr('class','headertablerow');
				headertable.append(headertablerow);
				
				$.each(mesi, function(i,v){
					var data = new Date(v);
					var headercell = $(document.createElement('div'));
					headercell.attr('class','headertablecell');
					headercell.css('width',(100/mesi.length)+'%');
					headercell.text('CIAO');
					headertablerow.append(headercell);
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