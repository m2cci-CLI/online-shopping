$(function() {
	//solving the active menu problem
	switch(menu){
	
	
	case 'About Us':
		$('#about').addClass('active');
		break;
		
	case 'Contact Us':
		$('#contact').addClass('active');
		break;
		
	case 'All Products':
		$('#listProducts').addClass('active');
		break;
		
	case 'Manage Products':
		$('#manageProducts').addClass('active');
		break;
		
	default :
		
		if(menu == "Home") break;
		$('#listProducts').addClass('active');
	    $('#a_'+menu).addClass('active');
		break;
	
		
	}
	
	var $table =$('#productListTable');
	if($table.length) {
		//console.log('Inside the table!;');
		
		var jsonUrl='';
		if(window.categoryId == ''){
			
			jsonUrl = window.contextRoot + '/json/data/all/products';
		}
		
		else {
			jsonUrl = window.contextRoot + '/json/data/category/'+window.categoryId+'/products';
		}
		
	
		$table.DataTable(  {
			lengthMenu:[[3,5,10,-1], ['3 Enregistrements ','5 Enregistrements ', '10 Enregistrements ','Tous']],
			pageLength :5,
			
ajax:{
				
				url:jsonUrl,
				dataSrc:''
				
			},
			
			columns :[
				
				{
					data : 'code',
					bSortable : false,
					mRender : function(data, type, row) {

						return '<img src="' + window.contextRoot
								+ '/resources/images/' + data
								+ '.jpg"   style="width:50px" style="height: 70px"/>';

					}
				},
				{
					data:'name'
				},
				
				{
					data:'brand'
				},

				{
					data:'unitPrice',
						mRender : function(data, type, row) {
							return '&#8364; ' + data
						}
					
				},
			
				{
					data : 'quantity',
					mRender : function(data, type, row) {

						if (data < 1) {
							return '<span style="color:red">Out of Stock!</span>';
						}

						return data;

					}
				},
				
				{
					bSortable : false,
					data : 'id',
					mRender : function(data, type, row) {

						var str = '';
						str += '<a href="'
								+ window.contextRoot
								+ '/show/'
								+ data
								+ '/product" class="btn btn-primary"><span class="glyphicon glyphicon-eye-open"></span></a> &#160;';

						if (row.quantity < 1) {
							str += '<a href="javascript:void(0)" class="btn btn-success disabled"><span class="glyphicon glyphicon-shopping-cart"></span></a>';
						} else {

							str += '<a href="'
									+ window.contextRoot
									+ '/cart/add/'
									+ data
									+ '/product" class="btn btn-success"><span class="glyphicon glyphicon-shopping-cart"></span></a>';
						}
						
						return str;

					}

				}
				
				]
			
			
	
		});
	
	
	
	
	}
	
	
	
	var $alert =$('.alert');
	if($alert.lenght){
		
		setTimeout(function() {
			
			$alert.fadeOut('slow');
			
		},3000)
		
		
	}
			
	
	
	
	
	
	
	
	
});