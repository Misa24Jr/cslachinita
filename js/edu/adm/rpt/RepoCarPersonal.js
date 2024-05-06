var dialogsRepoCarPersonal = new Object();
var editsCarnAluCedula = new Object();
var editsCarnAluNombre = new Object();
var editsCarnAluApellido = new Object();
var editsCarnCargo = new Object();
var imgButtonsCarnAluLimpiar = new Object();
var imgButtonsCarnAluReporte = new Object();
var imgButtonsCarnAluSalir = new Object();
var mw_RepoCarPersonal = new Object();// minWindow
       
var RepoCarPersonal = {
    windowName : 'RepoCarPersonal',
    isCreate: false,
    
    show: function(){
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogsRepoCarPersonal.isByClean())
			this.limpiar();			
		dialogsRepoCarPersonal.show();
	},
	
    hide: function(){
        dialogsRepoCarPersonal.hide();
    },
    createMWs: function(){
        mwRepoCarPersonal = desktop.addMinWindow('R.H.Alumno', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRepoCarPersonal.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
    },

    dialogsRepoCarPersonal_Init : function(){
        dialogsRepoCarPersonal.setMinimizeXY(0,0);
        dialogsRepoCarPersonal.setCenterScreen();
        dialogsRepoCarPersonal.addSpace(0,0,20);
        dialogsRepoCarPersonal.addLn(1,1,1);
		dialogsRepoCarPersonal.setHeightCell(1,1,13);
		dialogsRepoCarPersonal.addObjToDialog(editsCarnAluCedula,2,1,24);
		editsCarnAluCedula.setSizeEdit(145);
		dialogsRepoCarPersonal.addObjToDialog(editsCarnAluNombre,2,1,24);
		editsCarnAluNombre.setSizeEdit(145);
		dialogsRepoCarPersonal.addObjToDialog(editsCarnAluApellido,2,1,24);
		editsCarnAluApellido.setSizeEdit(145);
		dialogsRepoCarPersonal.adjAllMarginObj(2,1,15);
		dialogsRepoCarPersonal.addObjToDialog(editsCarnCargo,3,1,24);
		editsCarnCargo.setMaxLength(26); 
		editsCarnCargo.setSizeEdit(376);
		dialogsRepoCarPersonal.addLn(5,1,1);
		dialogsRepoCarPersonal.setHeightCell(5,1,10);
		dialogsRepoCarPersonal.addObjToDialog(imgButtonsCarnAluLimpiar,6,1);
		imgButtonsCarnAluLimpiar.setDimension(90,22);
		dialogsRepoCarPersonal.addObjToDialog(imgButtonsCarnAluReporte,6,1);
    	imgButtonsCarnAluReporte.setDimension(90,22);
        dialogsRepoCarPersonal.addObjToDialog(imgButtonsCarnAluSalir,6,1);
    	imgButtonsCarnAluSalir.setDimension(90,22);
    	dialogsRepoCarPersonal.adjAllMarginObj(6,1,25);
        dialogsRepoCarPersonal.leftMarginObj(6,1,0,162); 
    },

    create : function(){
    	dialogsRepoCarPersonal = dialogs.create('dialogsRepoCarPersonal',0,0,690,105,'CARNET DEL PERSONAL');
    	dialogsRepoCarPersonal.setAdjY(80);
    	editsCarnAluCedula = edits.create('editsCarnAluCedula','editsCarnAluCedula','C.i. (*):',1,43,'normal');
    	editsCarnAluCedula.setValidInteger();
      	editsCarnAluCedula.setFieldFind(true);
      	editsCarnAluNombre = edits.create('editsCarnAluNombre','editsCarnAluNombre','Nombre (*):',1,71,'normal');
      	editsCarnAluNombre.setValidEmpty();
      	editsCarnAluNombre.setFieldFind(true);
      	editsCarnAluApellido = edits.create('editsCarnAluApellido','editsCarnAluApellido','Apellido (*):',1,69,'normal');
      	editsCarnAluApellido.setValidEmpty();
      	editsCarnAluApellido.setFieldFind(true);
      	editsCarnCargo = edits.create('editsCarnCargo','editsCarnCargo','Cargo:',1,43,'normal');
    	editsCarnCargo.setValidEmpty();
    	editsCarnCargo.setFieldFind(true);
    	imgButtonsCarnAluLimpiar = imgButtons.create('imgButtonsCarnAluLimpiar','Limpiar','limpiar.png');
      	imgButtonsCarnAluReporte = imgButtons.create('imgButtonsCarnAluReporte','Imprimir','print.png');
      	imgButtonsCarnAluSalir = imgButtons.create('imgButtonsCarnAluSalir','Salir','salir.png');
      	this.isCreate=true;
	},

	init : function(){
		this.create();
		this.setEvents(); 
		this.dialogsRepoCarPersonal_Init();
		this.createMWs();
	},
	
	limpiarFind : function(ix) {
		editsCarnAluCedula.hideId = -1;
		
  		switch (ix) {
		case 1: 
			editsCarnAluNombre.setValue("");
			editsCarnAluApellido.setValue("");  		
			break;
		case 2: 
			editsCarnAluCedula.setValue("");
			editsCarnAluApellido.setValue("");  		
			break;
		default:
			editsCarnAluCedula.setValue("");
		    editsCarnAluNombre.setValue("");
			break;
		} 
  		
  		editsCarnCargo.setValue("");
  	},
	
	
	buscar: function() {
		if (editsCarnAluCedula.getValue() != '' || editsCarnAluNombre.getValue() != '' || editsCarnAluApellido.getValue() != '') {
			ResuBusqueda.setObjectExtFnc(editsCarnAluCedula, editsCarnAluNombre, editsCarnAluApellido);
			Tool.getGridData('MantObject', 'getMantPersTodas', dialogsRepoCarPersonal, gridsResuBusqueda, 'ResuBusqueda', editsCarnAluCedula, editsCarnAluCedula, editsCarnAluNombre, editsCarnAluNombre, editsCarnAluApellido, editsCarnAluApellido);
		}
		else {
			Alert.show('Debe ingresar al menos: C.i., Nombre o Apellido', 'SISTEMA', Alert.TYPE_INFO);
		}
	},
	
   	loadDataPers : function() {
		var rlx = xmlStructs.createRecordList("rlx");

		editsCarnAluCedula.readOnly(true);
  	    editsCarnAluNombre.readOnly(true);
  	    editsCarnAluApellido.readOnly(true);
  	    editsCarnAluCedula.onEnter("");
  		editsCarnAluCedula.onChange("");
  		editsCarnAluNombre.onEnter("");
  		editsCarnAluNombre.onChange("");
  		editsCarnAluApellido.onEnter("");
  		editsCarnAluApellido.onChange("");
    	if (json('getPermiso').data[0] != 'ACTIVO') {
  			editsCarnAluCedula.setValue(json('getDatoPersona').data[0]);
  	  		editsCarnAluNombre.setValue(json('getDatoPersona').data[1]);
  	  		editsCarnAluApellido.setValue(json('getDatoPersona').data[2]);
  	  		editsCarnAluCedula.hideId = json('getDatoPersona').data[3];
  	  		rlx.add('reg', editsCarnAluCedula);
  		}
    	else {
  	    	editsCarnAluCedula.readOnly(false);
  	    	editsCarnAluNombre.readOnly(false);
  	    	editsCarnAluApellido.readOnly(false);
  		  	editsCarnAluCedula.onEnter(this.windowName + ".buscar()");
  		  	editsCarnAluCedula.onChange(this.windowName + ".limpiarFind(1)");
  		  	editsCarnAluNombre.onEnter(this.windowName + ".buscar()");
  		  	editsCarnAluNombre.onChange(this.windowName + ".limpiarFind(2)");
  		  	editsCarnAluApellido.onEnter(this.windowName + ".buscar()");
  		  	editsCarnAluApellido.onChange(this.windowName + ".limpiarFind(3)");
    	}
        dialogsRepoCarPersonal.setMsg(xmlHttpReq.objStsResponse.shortInfo);
        dlgWait.hide();
    },

    limpiar : function() {
    	editsCarnAluCedula.hideId = -1;
  		editsCarnAluCedula.setValue(""); 
  		editsCarnAluNombre.setValue(""); 
  		editsCarnAluApellido.setValue(""); 
  		editsCarnCargo.setValue("");
  		dialogsRepoCarPersonal.setMsg("");
	},

	setEvents: function(){
		editsCarnAluCedula.onEnter(this.windowName + ".buscar()");
  		editsCarnAluNombre.onEnter(this.windowName + ".buscar()");
  		editsCarnAluApellido.onEnter(this.windowName + ".buscar()");
		editsCarnCargo.onEnter(this.windowName + ".reporte()");
		imgButtonsCarnAluLimpiar.onClick(this.windowName + ".limpiar()");
    	imgButtonsCarnAluReporte.onClick(this.windowName + ".reporte()");
        imgButtonsCarnAluSalir.onClick('dialogsRepoCarPersonal.close()');
	},

    reporte : function() {
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
        if (editsCarnAluCedula.valid(dialogsRepoCarPersonal))
			if (editsCarnAluNombre.valid(dialogsRepoCarPersonal))
				if (editsCarnAluApellido.valid(dialogsRepoCarPersonal))
					if (editsCarnCargo.valid(dialogsRepoCarPersonal)) {
					    	rep = new Report('portrait');
					        rep.setNoRepeatHead();
							rep.addBar(0,95,1128,140,rep.getRGBAObj(187,196,238,0.8),false);
							rep.setFontProperties(rep.getRGBAObj(10,10,10,0.9),14,'helvetica','normal');
							rep.setPositionIcon(750,105);
							rep.addHeadTitle('CARNET DE PERSONAL',true);						
							////////////////////////////////////////////////////FRENTE/////////////////////////////////////////////////////////////////////////////////////////
							//rep.addImage(106,240,484,285,imgEduca.logo_carnet, false);
							
							rep.addImage(103,234,560,592,imgEduca.logo_carnetpersonal, false);
							//rep.addImage(103,234,560,592,'images/logo/MRAB_logo_carnet.png',false);
							rep.addImage(578,570,680,622,'images/tijeras_1.png',false);
							rep.addLine(52,230,780,230,rep.getRGBAObj(4,128,119,1),4,false); //-------------//
							rep.addLine(50,596,780,596,rep.getRGBAObj(4,128,119,1),4,false); //--------------------------//							
							rep.addLine(100,160,100,700,rep.getRGBAObj(4,128,119,1),4,false);//////////////////////////////////
							rep.addLine(564,160,564,700,rep.getRGBAObj(4,128,119,1),4,false);//////////////////////////////////							
							rep.addImage(150,354,300,475,'images/pht/'+editsCarnAluCedula.getValue()+'.jpg',true);							
							rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),12,'helvetica','bold','black');
							rep.addText(220, 500,''+editsCarnAluNombre.getText(),false,false,0,0,'center'); rep.addText(220, 500,''+editsCarnAluNombre.getText(),false,false,0,0,'center');
							rep.addText(220, 515,''+ editsCarnAluApellido.getText(),false,false,0,0,'center');rep.addText(220, 515,''+ editsCarnAluApellido.getText(),false,false,0,0,'center');
							rep.addText(220, 532,'V- '+editsCarnAluCedula.getText(),false,false,0,0,'center');rep.addText(220, 532,'V- '+editsCarnAluCedula.getText(),false,false,0,0,'center');
							rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),9,'helvetica','bold','black');
							rep.addText(219, 555, ''+editsCarnCargo.getText(),false,false,0,0,'center');rep.addText(219, 555, ''+editsCarnCargo.getText(),false,false,0,0,'center');rep.addText(219, 555, ''+editsCarnCargo.getText(),false,false,0,0,'center');
							///////////////////////////////////////////////////REVERSO////////////////////////////////////////////////////////////////////////////////////////
							rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),8,'helvetica','bold','black');							
							rep.addText(431, 327,''+json('getMantPersTodas').data[20][0],false);rep.addText(431, 327,''+json('getMantPersTodas').data[20][0],false);
							rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),8,'helvetica','bold','black');
							rep.addText(347, 377, ''+json('getMantPersTodas').data[21][0],false);rep.addText(347, 377, ''+json('getMantPersTodas').data[21][0],false);
							rep.addText(347, 388, ''+json('getMantPersTodas').data[22][0],false);rep.addText(347, 388, ''+json('getMantPersTodas').data[22][0],false);
							///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////		
							//********************************************* FIN GENERACION DEL REPORTE ***********************************************
							rep.render();                
            				setTimeout(rep.previewHTML,1000);
						}
	}
};
