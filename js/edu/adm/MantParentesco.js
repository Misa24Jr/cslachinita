var dialogsMantPlaCuenta = new Object();
var editsMantParentDescripcion = new Object();
var gridsMantParentCodDescripcion = new Object();
var imgButtonsMantParentAgregar = new Object();
var imgButtonsMantParentModificar = new Object();
var imgButtonsMantParentEliminar = new Object();
var imgButtonsMantParentLimpiar = new Object();
var imgButtonsMantParentSalir = new Object();
var mwMantPlaCuenta = new Object();// minWindow

var MantPlaCuenta = {
	windowName : 'MantPlaCuenta',
	isCreate : false,
	idProfesion : 0,
	
	show : function() {
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsMantPlaCuenta.isByClean())
 			this.limpiar();			
		dialogsMantPlaCuenta.show();
	},
	
	hide : function() {
		dialogsMantPlaCuenta.hide();
	},
	
	createMWs : function() {
        	mwMantPlaCuenta = desktop.addMinWindow('M.Plan/Cuenta', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        	dialogsMantPlaCuenta.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
	dialogsMantPlaCuenta_Init : function(){
        dialogsMantPlaCuenta.setMinimizeXY(0,0);
        dialogsMantPlaCuenta.setCenterScreen();
        dialogsMantPlaCuenta.addSpace(0,0,20);
        dialogsMantPlaCuenta.addLn(1,1,1);
		dialogsMantPlaCuenta.setHeightCell(1,1,10);
        dialogsMantPlaCuenta.addObjToDialog(editsMantParentDescripcion,2,1,24);
        editsMantParentDescripcion.setSizeEdit(298);
	    editsMantParentDescripcion.setMaxLength(50);
        dialogsMantPlaCuenta.addLn(3,1,1);
		dialogsMantPlaCuenta.setHeightCell(3,1,10);
        dialogsMantPlaCuenta.addObjToDialog(gridsMantParentCodDescripcion.getObject(),4,1);
        dialogsMantPlaCuenta.addLn(5,1,1);
		dialogsMantPlaCuenta.setHeightCell(5,1,12);
        dialogsMantPlaCuenta.addObjToDialog(imgButtonsMantParentAgregar,6,1);
        dialogsMantPlaCuenta.addObjToDialog(imgButtonsMantParentModificar,6,1);
        dialogsMantPlaCuenta.addObjToDialog(imgButtonsMantParentEliminar,6,1);
        dialogsMantPlaCuenta.addObjToDialog(imgButtonsMantParentLimpiar,6,1);
        dialogsMantPlaCuenta.addObjToDialog(imgButtonsMantParentSalir,6,1);        
        imgButtonsMantParentAgregar.setDimension(90,22);
        imgButtonsMantParentModificar.setDimension(90,22);
        imgButtonsMantParentEliminar.setDimension(90,22);
        imgButtonsMantParentLimpiar.setDimension(90,22);
        imgButtonsMantParentSalir.setDimension(90,22);
        dialogsMantPlaCuenta.adjAllMarginObj(6,1,18);
        dialogsMantPlaCuenta.leftMarginObj(6,1,0,30); 
	},

	gridsMantParentCodDescripcion_Init : function() {
        gridsMantParentCodDescripcion.setFixColRow(false,true);
        gridsMantParentCodDescripcion.addTitleVectorX(['Código','Descripción']);
        gridsMantParentCodDescripcion.showData();
        gridsMantParentCodDescripcion.setReadOnlyToAll();
        gridsMantParentCodDescripcion.setSizeCol(1,0);
        gridsMantParentCodDescripcion.setSizeCol(2,585);
        gridsMantParentCodDescripcion.hideCol(1);

	},

	create : function() {
		dialogsMantPlaCuenta = dialogs.create('dialogsMantPlaCuenta',0,0,629,335,'MANTENIMIENTO DE PARENTESCO');
		editsMantParentDescripcion = edits.create('editsMantParentDescripcion','MantPlaCuentaDescripcion','Descripción:',1,80,'normal');
		editsMantParentDescripcion.setValidEmpty();
		gridsMantParentCodDescripcion = grids.create('gridsMantParentCodDescripcion',10,2);
		imgButtonsMantParentAgregar = imgButtons.create('imgButtonsMantParentAgregar','Agregar','ok.png');
		imgButtonsMantParentModificar = imgButtons.create('imgButtonsMantParentModificar','Modificar','icono_modificar.png');
		imgButtonsMantParentModificar.setDisable();
		imgButtonsMantParentEliminar = imgButtons.create('imgButtonsMantParentEliminar','Eliminar','eliminar.png');
		imgButtonsMantParentEliminar.setDisable();
		imgButtonsMantParentLimpiar = imgButtons.create('imgButtonsMantParentLimpiar','Limpiar','limpiar.png');
		imgButtonsMantParentSalir = imgButtons.create('imgButtonsMantParentSalir','Salir','salir.png');
	},

	init : function(){
		this.create();
		this.setEvents();
		this.dialogsMantPlaCuenta_Init();
		this.gridsMantParentCodDescripcion_Init();
		this.createMWs();		
	},

  	limpiar : function() {
  		this.idProfesion = 0;
  		editsMantParentDescripcion.setValue("");
  		gridsMantParentCodDescripcion.clean();
  		dialogsMantPlaCuenta.setMsg("");
		imgButtonsMantParentAgregar.setEnable();
		imgButtonsMantParentModificar.setDisable();
		imgButtonsMantParentEliminar.setDisable();	
		Tool.getGridData('MantObject', 'getParentesco', dialogsMantPlaCuenta, gridsMantParentCodDescripcion, false);
  	},
  	
  	setData : function() {
		if (gridsMantParentCodDescripcion.getDataCell(1) != "") {
			this.idProfesion = gridsMantParentCodDescripcion.getDataCell(1);
			editsMantParentDescripcion.setValue(gridsMantParentCodDescripcion.getDataCell(2));
			imgButtonsMantParentAgregar.setDisable();
			imgButtonsMantParentModificar.setEnable();
			imgButtonsMantParentEliminar.setEnable();
        }     			
	},
  	
  	setEvents : function() {
  		gridsMantParentCodDescripcion.onClickCells(this.windowName+".setData()")	
  		imgButtonsMantParentAgregar.onClick(this.windowName+".coreUpdate('agregar')");
  		imgButtonsMantParentModificar.onClick(this.windowName+".coreUpdate('modificar')");
  		imgButtonsMantParentEliminar.onClick(this.windowName+".coreUpdate('eliminar')");
  		imgButtonsMantParentLimpiar.onClick('MantPlaCuenta.limpiar()');
  		imgButtonsMantParentSalir.onClick('dialogsMantPlaCuenta.close()');	  	 	
    },
	
	coreUpdate : function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");

		if (editsMantParentDescripcion.valid(dialogsMantPlaCuenta)) {
			if (methodName != 'eliminar') 
				rlx.add('reg',editsMantParentDescripcion);
			if (methodName != 'agregar') 
				rlx.addInt('reg', this.idProfesion);
			Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + '.limpiar()', rlx);
		}
	}
}