<div class ="container">

<div class="row">

<!-- pour sidebar -->


<div  class="col-md-3">

 <%@include file="./shared/sidebar.jsp"%>

</div>

<!-- to display the actual products -->   

 <div  class="col-md-9">


<div class="row" >

<div  class="col-lg-12">

<c:if test="${userClickAllProducts == true}">

<ol class ="breadcrumb">

<li><a href="${contextRoot}/home"> Home</a></li>
<li class="active">tous les produits</li>


</ol>
</c:if>

<c:if test="${userClickCategoryProducts == true}">

<ol class ="breadcrumb">

<li><a href="${contextRoot}/home"> Home</a></li>
<li class="active">cat�gorie</li>
<li class="active">${category.name}</li>


</ol>
</c:if>
</div>
</div>
</div>

</div>
</div>