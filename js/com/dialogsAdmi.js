var dialogsAdmi = 
{
  mwObj : new Array(),
  objects: new Array,
  ids: new Array,
  TYPE_ALIGN_CENTER: "center",
  TYPE_ALIGN_LEFT: "left",
  TYPE_ALIGN_RIGHT: "right",
  bgImgPath: "images/bg/",
  botonCloseImgPath: "bg207.jpg",
  transparecyBgImg: "shadow-c.png",
  bgImgDlg: "bg228.jpg",
  botonMinImgPath: "bg207.jpg",
  botonMaxImgPath: "bg207.jpg",
  fontFamilyBottonControl: 'arial',
  fontColorBottonControl: 'white',
  adjY: 0,
  mouseX: 0,
  mouseY: 0,
  mouseXDown: 0,
  mouseYDown: 0,
  mouseXMove: 0,
  mouseYMove: 0,
  totaldialogs: 0,
  pathImg: 'images/difuso.png',
  isClick: false,
  STS_CLOSE : 0,
  STS_CREATE : 1,
  STS_SHOW : 2,
  STS_MINIMIZE : 3,
  iconImg: 'images/logo/lapiz.png',
  imgDivModal : "transparente.gif",  
  menuProperty: 
  {
    imgBar: 'url(images/bg/bg211.jpg)',
    imgBarSelected: 'url(images/bg/bg201.jpg)',
    imgPanel: 'url(images/bg/bg211.jpg)',
    imgArrow: 'images/next.gif',
    sizeFlecha: 12,
    borderStyle: 'none',
    borderStylePanel: 'outset',
    borderWidthPanel: 2,
    colorText: 'black',
    colorTextSubMenu: 'black',
    backgroundColor: 'darkblue',
    colorTextSelected: 'white',
    colorTextDisable: 'gray',
    fontFamily: 'arial',
    fontSize: '12',
    fontWeight: 'normal',
    fontWeightSelected: 'normal'
  },
  addPropertyMethod: function(id)
  {
    dialogsAdmi.objects[id].alignTitle = function(typeAlign)
    {
      dialogsAdmi.alignTitle(id, typeAlign);
    };
    dialogsAdmi.objects[id].addObjToDialog = function(obj, row, col, heightCell, leftMargin)
    {
      dialogsAdmi.addObjToDialog(id, obj, row, col, heightCell, leftMargin);
    };
    dialogsAdmi.objects[id].alignObjToCell = function(row, col, align)
    {
      dialogsAdmi.alignObjToCell(id, row, col, align);
    };
    dialogsAdmi.objects[id].addSpace = function(row, col, space)
    {
      dialogsAdmi.addSpace(id, row, col, space);
    };
    dialogsAdmi.objects[id].addLn = function(row, col, lns)
    {
      dialogsAdmi.addLn(id, row, col, lns);
    };
    dialogsAdmi.objects[id].close = function()
    {
      dialogsAdmi.close(id);
    };
    dialogsAdmi.objects[id].destroyDialog = function()
    {
      dialogsAdmi.destroyDialog(id);
    };
    dialogsAdmi.objects[id].getMouseXY = function(e)
    {
      dialogsAdmi.getMouseXY(e);
    };
    dialogsAdmi.objects[id].getObject = function()
    {
      return dialogsAdmi.getObject(id);
    };
    dialogsAdmi.objects[id].hide = function()
    {
      dialogsAdmi.hide(id);
    };
    dialogsAdmi.objects[id].minimize = function()
    {
      dialogsAdmi.minimize(id);
    };
    dialogsAdmi.objects[id].maximize = function()
    {
      dialogsAdmi.maximize(id);
    };
    dialogsAdmi.objects[id].onClickDialog = function(funct)
    {
      dialogsAdmi.onClickDialog(id, funct);
    };
    dialogsAdmi.objects[id].onClickStsBar = function(funct)
    {
      dialogsAdmi.onClickStsBar(id, funct);
    };
    dialogsAdmi.objects[id].onDblClickStsBar = function(funct)
    {
      dialogsAdmi.onDblClickStsBar(id, funct);
    };
    dialogsAdmi.objects[id].onDblClickDialog = function(funct)
    {
      dialogsAdmi.onDblClickDialog(id, funct);
    };
    dialogsAdmi.objects[id].OnBeforeMinimize = function(funct)
    {
      dialogsAdmi.OnBeforeMinimize(id, funct);
    };
    dialogsAdmi.objects[id].OnAfterMinimize = function(funct)
    {
      dialogsAdmi.OnAfterMinimize(id, funct);
    };
    dialogsAdmi.objects[id].OnBeforeMaximize = function(funct)
    {
      dialogsAdmi.OnBeforeMaximize(id, funct);
    };
    dialogsAdmi.objects[id].OnAfterMaximize = function(funct)
    {
      dialogsAdmi.OnAfterMaximize(id, funct);
    };
	dialogsAdmi.objects[id].removeObjFromDialog = function(obj, row, col)
    {
      dialogsAdmi.removeObjFromDialog(id, obj, row, col);
    };
    dialogsAdmi.objects[id].setBgBarImg = function(barImg)
    {
      //dialogsAdmi.setBgBarImg(id, barImg);
    };
    dialogsAdmi.objects[id].setBgBodyImg = function(bgImg)
    {
      //dialogsAdmi.setBgBodyImg(id, bgImg);
    };
    dialogsAdmi.objects[id].setEvents = function()
    {
      dialogsAdmi.setEvents(id);
    };
    dialogsAdmi.objects[id].setResizeDialog = function(x2, y2)
    {
      dialogsAdmi.setResizeDialog(id, x2, y2);
    };
    dialogsAdmi.objects[id].setPosition = function(x, y)
    {
      dialogsAdmi.setPosition(id, x, y);
    };
    dialogsAdmi.objects[id].setAdjY = function(adj)
    {
      dialogsAdmi.setAdjY(adj);
    };
    dialogsAdmi.objects[id].setCenterScreen = function()
    {
      dialogsAdmi.setCenterScreen(id);
    };
    dialogsAdmi.objects[id].setFullScreen = function()
    {
      dialogsAdmi.setFullScreen(id);
    };
    dialogsAdmi.objects[id].setEnableMinimize = function(sts)
    {
      dialogsAdmi.setEnableMinimize(id, sts);
    };
    dialogsAdmi.objects[id].setEnableClose = function(sts)
    {
      dialogsAdmi.setEnableClose(id, sts);
    };  
    dialogsAdmi.objects[id].setEnableResize = function(sts)
    {
      dialogsAdmi.setEnableResize(id, sts);
    };
    dialogsAdmi.objects[id].setEnableFullScreen = function(sts)
    {
      dialogsAdmi.setEnableFullScreen(id, sts);
    };
    dialogsAdmi.objects[id].setMinimizeXY = function(x, y)
    {
      dialogsAdmi.setMinimizeXY(id, x, y);
    };
    dialogsAdmi.objects[id].sendToFrom = function()
    {
      dialogsAdmi.sendToFrom(id);
    };
    dialogsAdmi.objects[id].setBlockModal = function()
    {
      dialogsAdmi.setBlockModal(id);
    };
    dialogsAdmi.objects[id].remBlockModal = function()
    {
      dialogsAdmi.remBlockModal(id);
    };
    dialogsAdmi.objects[id].show = function()
    {
      dialogsAdmi.show(id);
    };
    dialogsAdmi.objects[id].showModal = function()
    {
      dialogsAdmi.showModal(id);
    };
    dialogsAdmi.objects[id].setBodyHeight = function(height)
    {
      dialogsAdmi.setBodyHeight(id, height);
    };
    dialogsAdmi.objects[id].setWidth = function(width)
    {
      dialogsAdmi.setWidth(id, width);
    };
    dialogsAdmi.objects[id].setTitle = function(title)
    {
      dialogsAdmi.setTitle(id, title);
    };
    dialogsAdmi.objects[id].setColorTitle = function(color)
    {
      dialogsAdmi.setColorTitle(id, color);
    };
    dialogsAdmi.objects[id].setBorderStyleTitleBar = function(borderStyle)
    {
      dialogsAdmi.setBorderStyleTitleBar(id, borderStyle);
    };
    dialogsAdmi.objects[id].setBorderStyleStsBar = function(borderStyle)
    {
      dialogsAdmi.setBorderStyleStsBar(id, borderStyle);
    };
    dialogsAdmi.objects[id].setBorderStyleBodyDialog = function(borderStyle)
    {
      dialogsAdmi.setBorderStyleBodyDialog(id, borderStyle);
    };
    dialogsAdmi.objects[id].setWidthControlButtons = function(value)
    {
      dialogsAdmi.setWidthControlButtons(id, value);
    };
    dialogsAdmi.objects[id].setHeightControlButtons = function(value)
    {
      dialogsAdmi.setHeightControlButtons(id, value);
    };
    dialogsAdmi.objects[id].setHeightBarTitle = function(value)
    {
      dialogsAdmi.setHeightBarTitle(id, value);
    };
    dialogsAdmi.objects[id].setHeightBarSts = function(value)
    {
      dialogsAdmi.setHeightBarSts(id, value);
    };
    dialogsAdmi.objects[id].setMsg = function(msg,sts)
    {
      dialogsAdmi.setMsg(id, msg, sts);
    };
    dialogsAdmi.objects[id].setColorTextMsg = function(color)
    {
      dialogsAdmi.setColorTextMsg(id, color);
    };
    dialogsAdmi.objects[id].setBgColorBarTitle = function(color)
    {
      dialogsAdmi.setBgColorBarTitle(id, color);
    };
    dialogsAdmi.objects[id].setBgColorBarSts = function(color)
    {
      dialogsAdmi.setBgColorBarSts(id, color);
    };
    dialogsAdmi.objects[id].setBgColorBodyDialog = function(color)
    {
      dialogsAdmi.setBgColorBodyDialog(id, color);
    };
    dialogsAdmi.objects[id].setFontBarTitle = function(fontFamily, fontSize, fontColor)
    {
      dialogsAdmi.setFontBarTitle(id, fontFamily, fontSize, fontColor);
    };
    dialogsAdmi.objects[id].setFontBarSts = function(fontFamily, fontSize, fontColor)
    {
      dialogsAdmi.setFontBarSts(id, fontFamily, fontSize, fontColor);
    };
    dialogsAdmi.objects[id].setSpacing = function(spacing, padding)
    {
      dialogsAdmi.setSpacing(id, spacing, padding);
    };
    dialogsAdmi.objects[id].setObjAttrib = function(objAttrib, env)
    {
      dialogsAdmi.setObjAttrib(id, objAttrib, env);
    };
    dialogsAdmi.objects[id].setObjAttribToAll = function(objAttrib, env)
    {
      dialogsAdmi.setObjAttribToAll(objAttrib, env);
    };
    dialogsAdmi.objects[id].setLoadBGImg = function(activeLoad)
    {
      dialogsAdmi.setLoadBGImg(id, activeLoad);
    };
    dialogsAdmi.objects[id].setLoadBGImgAll = function(activeLoad)
    {
      dialogsAdmi.setLoadBGImgAll(activeLoad);
    };
    dialogsAdmi.objects[id].showGrid = function(sts)
    {
      dialogsAdmi.showGrid(id, sts);
    };
    dialogsAdmi.objects[id].onHideDialog = function(funct)
    {
      dialogsAdmi.onHideDialog(id, funct);
    };
    dialogsAdmi.objects[id].onShowDialog = function(funct)
    {
      dialogsAdmi.onShowDialog(id, funct);
    };
    dialogsAdmi.objects[id].onClickCloseDialog = function(funct)
    {
      dialogsAdmi.onClickCloseDialog(id, funct);
    };
    dialogsAdmi.objects[id].onClickMinimizeDialog = function(funct, sts)
    {
      dialogsAdmi.onClickMinimizeDialog(id, funct, sts);
    };
    dialogsAdmi.objects[id].onAfterMinimize = function(funct)
    {
      dialogsAdmi.onAfterMinimize(id, funct);
    };
    dialogsAdmi.objects[id].onBeforeMinimize = function(funct)
    {
      dialogsAdmi.onBeforeMinimize(id, funct);
    };
    dialogsAdmi.objects[id].setMinWindowEvent = function(eClose, eMin, eShow)
    {
      dialogsAdmi.setMinWindowEvent(id, eClose, eMin, eShow);
    };
    dialogsAdmi.objects[id].setMenu = function(structMenuDlg)
    {
      dialogsAdmi.setMenu(id, structMenuDlg);
    };
    dialogsAdmi.objects[id].setSubMenu = function(structSubMenuDlg)
    {
      dialogsAdmi.setSubMenu(id, structSubMenuDlg);
    };
    dialogsAdmi.objects[id].hideAllSubMenu = function()
    {
      dialogsAdmi.hideAllSubMenu(id);
    };
    dialogsAdmi.objects[id].hideAllMenuForAllDlg = function()
    {
      dialogsAdmi.hideAllMenuForAllDlg();
    };
    dialogsAdmi.objects[id].setFocus = function()
    {
      dialogsAdmi.setFocus(id);
    };
    dialogsAdmi.objects[id].setPriorPosition = function()
    {
      dialogsAdmi.setPriorPosition(id);
    };
	dialogsAdmi.objects[id].setSizeCell = function(row,col,width,height)
	{
	  dialogsAdmi.setSizeCell(id,row,col,width,height);
	};
	dialogsAdmi.objects[id].adjAllMarginObj = function(row, col, margin)
	{
	  dialogsAdmi.adjAllMarginObj(id, row, col, margin);
	};
	dialogsAdmi.objects[id].leftMarginObj = function(row, col, posObject, margin)
	{
	  dialogsAdmi.leftMarginObj(id, row, col, posObject, margin);	
	};
	dialogsAdmi.objects[id].setWidthSubCellObj = function(row, col, posObject, width)
	{
	  dialogsAdmi.setWidthSubCellObj(id, row, col, posObject, width);
	};
	dialogsAdmi.objects[id].setWidthCell = function(row,col,width)
    {
	  dialogsAdmi.setWidthCell(id,row,col,width);
    };
    dialogsAdmi.objects[id].setHeightCell = function(row,col,height)
	{
	  dialogsAdmi.setHeightCell(id,row,col,height);	
    };
	dialogsAdmi.objects[id].setStaticOrder = function(isStatic)
	{
	  dialogsAdmi.setStaticOrder(id, isStatic);	
	};
	dialogsAdmi.objects[id].getTitleDialog = function()
    {
      return dialogsAdmi.getTitleDialog(id);
    };
	dialogsAdmi.objects[id].getSTS = function()
    {
      return dialogsAdmi.getSTS(id);
    };
    dialogsAdmi.objects[id].vAlignObjToCell = function(row, col, valign)
    {
      dialogsAdmi.vAlignObjToCell(id, row, col, valign);
    };
    dialogsAdmi.objects[id].getObjectFromCell = function(objId)
    {	
      return dialogsAdmi.getObjectFromCell(id, objId);	
    };
    dialogsAdmi.objects[id].setLeftMarginObj = function(obj, margin)
    {
      dialogsAdmi.setLeftMarginObj(id, obj, margin);
    };
    dialogsAdmi.objects[id].setBottomMarginObj = function(obj, margin)
    {
      dialogsAdmi.setBottomMarginObj(id, obj, margin);
    };
	dialogsAdmi.objects[id].setTopMarginObj = function(obj, margin)
	{
	  dialogsAdmi.setTopMarginObj(id, obj, margin);	
	};
	dialogsAdmi.objects[id].bottomMarginObj = function(row, col, posObject, margin)
	{
	  dialogsAdmi.bottomMarginObj(id, row, col, posObject, margin);	
	};
	dialogsAdmi.objects[id].topMarginObj = function(row, col, posObject, margin)
	{
	  dialogsAdmi.topMarginObj(id, row, col, posObject, margin);	
	};
	dialogsAdmi.objects[id].getObjInDialog = function(idObj)  
	{
	  return dialogsAdmi.getObjInDialog(idObj);	
	};
	dialogsAdmi.objects[id].closeAll = function()
	{
	  dialogsAdmi.closeAll();	
	};
	dialogsAdmi.objects[id].enableScrollMsg = function(velocity, blink, fontFamily, fontSize, fontColor)
	{
	  dialogsAdmi.enableScrollMsg(id, velocity, blink, fontFamily, fontSize, fontColor);	
	};
	dialogsAdmi.objects[id].disableScrollMsg = function()
	{
	  dialogsAdmi.disableScrollMsg(id);	
	};
	dialogsAdmi.objects[id].onScrollMsgComplete = function(funct, n)
	{
	  dialogsAdmi.onScrollMsgComplete(id, funct, n);
	};
	dialogsAdmi.objects[id].getPositionPoint = function()
	{
	  return dialogsAdmi.getPositionPoint(id);
	};
	dialogsAdmi.objects[id].setImageDivModal = function(imageDivModal)
    {
      dialogsAdmi.setImageDivModal(id, imageDivModal);
    };
    dialogsAdmi.objects[id].setTransparencyBgImg = function(transparencyImg)
    {
      dialogsAdmi.setTransparencyBgImg(transparencyImg);  
    };
    dialogsAdmi.objects[id].setIconDlg = function(path, icon)
    {
      dialogsAdmi.setIconDlg(id, path, icon);  
    };
    dialogsAdmi.objects[id].setIconAllDlg = function(path, icon)
    {
      dialogsAdmi.setIconAllDlg(path, icon);  
    };
    dialogsAdmi.objects[id].addObject = function(obj,x,y)
    {
      dialogsAdmi.addObject(id,obj,x,y);  
    };
    dialogsAdmi.objects[id].isByClean = function()
    {
      return dialogsAdmi.isByClean(id);
    };
    dialogsAdmi.objects[id].setStsModal = function()
    {
      dialogsAdmi.setStsModal(id);
    };
    dialogsAdmi.objects[id].updateBgBodyImg = function(bgImg)
    {
      dialogsAdmi.updateBgBodyImg(id, bgImg);
    };
    
    dialogsAdmi.objects[id].setBgBotonClose = function(bgImg)
    {
      dialogsAdmi.setBgBotonClose(id, bgImg);
    };
    
    dialogsAdmi.objects[id].setPositionObject = function(obj,x,y)
    {
      dialogsAdmi.setPositionObject(id,obj,x,y);	
    };
    
    dialogsAdmi.objects[id].showButtonHelp = function(){
    	dialogsAdmi.showButtonHelp(id)
  	};
  
    dialogsAdmi.objects[id].hideButtonHelp = function(){
    	dialogsAdmi.hideButtonHelp(id)
    };
  
    dialogsAdmi.objects[id].isShowButtonHelp = function(){
  		return dialogsAdmi.isShowButtonHelp(id);
    };
  
    dialogsAdmi.objects[id].onClickButtonHelp = function(funct){
		dialogsAdmi.onClickButtonHelp(id, funct); 	
    };    
    
  },
  
  setPositionObject : function(id,obj,x,y){
	obj.style.position = 'absolute';
	obj.style.left = x+'px';
	obj.style.top = y+'px';   
  },
  
  enableScrollMsg : function(id, velocity, blink, fontFamily, fontSize, fontColor)
  {
  	this.setFontBarSts(id, fontFamily, fontSize, fontColor);
  	this.objects[id].itemCarMsg = 0;
  	this.objects[id].scrollCounter = 0;
  	this.objects[id].scrollCounterDef = 0;
  	this.objects[id].onScrollComplete = new Function('');
  	this.objects[id].idScrollMsg = setInterval('dialogsAdmi.scrollMsg('+id+')',velocity);
    this.objects[id].msgBlink = blink;
  },
  
  scrollMsg : function(objElement)
  {
  	var flag = false;
  	objElement.tableSts.rows[0].cells[1].align = 'center';
  	if(objElement.itemCarMsg > objElement.stsMsg.length)
  	{
  	  if(objElement.itemCarMsg > objElement.stsMsg.length+2)
  	  {
  	  	objElement.itemCarMsg=0;
  	  	objElement.scrollCounter++;
  	  	if(objElement.scrollCounter % objElement.scrollCounterDef == 0)
  	  	{
  	  	  flag=true;	
  	  	  objElement.onScrollComplete();
  	    }
  	  }
  	}
  	var c = objElement.stsMsg.substring(0, objElement.itemCarMsg);
  	if(objElement.msgBlink && objElement.itemCarMsg % 2 != 0)
  	  c = '';
  	if(!flag)
  	  objElement.tableSts.rows[0].cells[1].innerHTML = c;
  	objElement.itemCarMsg++;
  },
  
  onScrollMsgComplete : function(id, funct, n)
  {
  	this.objects[id].scrollCounterDef = parseInt(n, 10); 
  	this.objects[id].onScrollComplete = new Function(funct);
  },
  
  disableScrollMsg : function(id)
  {
  	clearInterval(this.objects[id].idScrollMsg);
  	this.objects[id].tableSts.rows[0].cells[1].align = 'left';
  	this.objects[id].tableSts.rows[0].cells[1].innerHTML = this.objects[id].stsMsg;
  	this.setColorTextMsg(id, this.objects[id].actColor);
  },
  
  alignTitle: function(id, typeAlign)
  {
    this.objects[id].tableTitleIcon.rows[0].cells[1].style.textAlign = typeAlign;
  },
  
  addHTMLToDialog: function(id, html, row, col)
  {
    var actSizeRow = this.objects[id].tableBody.rows.length;
    while (actSizeRow <= row) 
    {
      this.objects[id].tableBody.insertRow(actSizeRow);
      actSizeRow = this.objects[id].tableBody.rows.length;
    }
    var actSizeCol = this.objects[id].tableBody.rows[row].cells.length;
    while (actSizeCol <= col) 
    {
      this.objects[id].tableBody.rows[row].insertCell(actSizeCol);
      actSizeCol = this.objects[id].tableBody.rows[row].cells.length;
    }
    this.objects[id].tableBody.rows[row].cells[col].innerHTML = html;
  },
  
  addObject : function(id,obj,x,y)
  {
    obj.style.position = 'absolute';
    obj.style.left = x+'px';
    obj.style.top = y+'px';  
    this.objects[id].divBody.appendChild(obj);
    this.objects[id].relativeObj[this.objects[id].relativeObj.length] = obj; 
  },
  
  hideAllRelativeObj : function(id)
  {  
    for(var i=0; i<this.objects[id].relativeObj.length; i++)  
    { 
      this.objects[id].relativeObj[i].style.display = 'none';  
    }
  },
  
  showAllRelativeObj : function(id)
  {
    for(var i=0; i<this.objects[id].relativeObj.length; i++)  
    {
      this.objects[id].relativeObj[i].style.display = 'block';
      if(this.objects[id].relativeObj[i].nameComponent=='powerComboBox'|| this.objects[id].relativeObj[i].nameComponent=='edits' || 
	  this.objects[id].relativeObj[i].nameComponent=='imgButtons' || this.objects[id].relativeObj[i].nameComponent=='memo')  	
        if(!this.objects[id].relativeObj[i].sts_Show)
          this.objects[id].relativeObj[i].style.display = 'none';   
    }
  },
  addObjToDialog: function(id, obj, row, col, heightCell, leftMargin)
  {
    var actSizeRow = this.objects[id].tableBody.rows.length;
    while (actSizeRow <= row) 
    {
      this.objects[id].tableBody.insertRow(actSizeRow);
      actSizeRow = this.objects[id].tableBody.rows.length;
    };
    var actSizeCol = this.objects[id].tableBody.rows[row].cells.length;
    while (actSizeCol <= col) 
    {
      this.objects[id].tableBody.rows[row].insertCell(actSizeCol);
	  var container = document.createElement('table');
	  container.setAttribute("border", "0");
      container.setAttribute("cellPadding", "0");
      container.setAttribute("cellSpacing", "0");
	  container.style.borderWidth='0px';
	  container.style.fontSize='0px';
	  container.insertRow(0);
	  container.insertRow(1);
	  container.insertRow(2);
	  container.rows[0].style.borderStyle='none';
	  container.rows[0].style.height='0px';
	  container.rows[0].style.width='0px';
	  container.rows[0].style.fontSize='0px';
	  this.objects[id].tableBody.rows[row].cells[actSizeCol].typeElement='table';
	  this.objects[id].tableBody.rows[row].cells[actSizeCol].appendChild(container);
      actSizeCol = this.objects[id].tableBody.rows[row].cells.length;
    };
	var cont = this.objects[id].tableBody.rows[row].cells[col].firstChild;
	if(this.objects[id].tableBody.rows[row].cells[actSizeCol-1].typeElement=='table')
	{
		var p = cont.rows[0].cells.length;
		cont.rows[0].insertCell(p);
		cont.rows[1].insertCell(p);
		cont.rows[2].insertCell(p);
		cont.rows[0].insertCell(p+1);
		cont.rows[1].insertCell(p+1);
		cont.rows[2].insertCell(p+1);
		cont.rows[1].cells[p+1].style.height='0px';
		cont.rows[1].cells[p+1].style.lineHeight='0px';			
		if(heightCell!=null)
		{
			this.setHeightCell(id,row,col,heightCell);
		};		
		cont.rows[1].cells[p+1].vAlign='top';
		cont.rows[1].cells[p+1].appendChild(obj);
		if(leftMargin!=null && leftMargin!=undefined)
		{
		  this.leftMarginObj(id,row,col,parseInt(p/2,10),leftMargin);
		};
	};
  },
  
  getObjInDialog : function(idObj)
  {
  	for(var i=0; i<this.ids.length; i++)
  	{
  	  var cellObj = this.getObjectFromCell(this.ids[i], idObj);	
  	  if(cellObj != null)
  	    return cellObj.obj;
  	}
  	return null;
  },
  
  getObjectFromCell : function(id, objId)
  {
  	var Cell = new Object();
  	Cell.Obj = null;
  	var flagStop = false;
  	var tRows = this.objects[id].tableBody.rows.length;
  	for(var f = 0; f < tRows; f++)
  	{
  	  var tCols = this.objects[id].tableBody.rows[f].cells.length;		
      for(var c = 0; c < tCols; c++)
      {
        if(this.objects[id].tableBody.rows[f].cells[c].typeElement=='table')
        {
      		var cont = this.objects[id].tableBody.rows[f].cells[c].firstChild;        		
      		var p = cont.rows[1].cells.length;
      		for(i=0; i < p; i++)	
      		{
      		  	var obj = cont.rows[1].cells[i].firstChild;
      		  	if(typeof (obj) == 'object')
      		  	{	
      		  	  if(obj!=null)
      		  	  {
      		  	  	
      		  	  	if(obj.id == objId)
      		  	    {
      		  	    	Cell.Obj = obj;
      		  	    	Cell.objCount = parseInt(cont.rows[1].cells.length/2,10);
      		  	  		Cell.rowContainer = 0;
      		  	  		Cell.colContainer = i;
      		  	  		Cell.row = f;
      		  	  		Cell.col = c;
      		  	  		Cell.posObj = parseInt((i-1)/2,10);
      		  	  		flagStop = true;	
      		  	  	}	
      		  	  }		
      		  	}
      		  	if(flagStop)
      		  	  break;
      		}
        }	
        if(flagStop)
      	  break;
      }		
  	  if(flagStop)
      	break;	  	  	
  	}
  	return Cell;
  },
  
  adjAllMarginObj : function(id, row, col, margin)
  {
  	var i=0;
	var cont = this.objects[id].tableBody.rows[row].cells[col].firstChild;
	for(i=0; i<cont.rows[0].cells.length-1;i++)
	{
	  if(i % 2 ==0 && i!=0)		
	    cont.rows[0].cells[i].width = margin+'px';
	}
  },
  
  getTitleDialog: function(id)
  {
     return this.objects[id].titleDialog;
  },

  getSTS: function(id)
  {
     return this.objects[id].sts;
  },
  
  isByClean: function(id)
  {
  	 if(this.getSTS(id)==this.STS_CLOSE || this.getSTS(id)==this.STS_CREATE)
       return true;
     return false;
  },
  
  leftMarginObj : function(id, row, col, posObject, margin)
  {
	var cont = this.objects[id].tableBody.rows[row].cells[col].firstChild;
	cont.rows[1].cells[posObject*2].width = margin+'px';
  },
    
  topMarginObj : function(id, row, col, posObject, margin)
  {
	var cont = this.objects[id].tableBody.rows[row].cells[col].firstChild;
	cont.rows[0].cells[posObject*2].height = margin+'px';
  },
  
  bottomMarginObj : function(id, row, col, posObject, margin)
  {
	var cont = this.objects[id].tableBody.rows[row].cells[col].firstChild;
	cont.rows[2].cells[posObject*2].height = margin+'px';
  },
    
  setLeftMarginObj : function(id, obj, margin)
  {
  	var co = this.getObjectFromCell(id, obj.id);
  	this.leftMarginObj(id, co.row, co.col, co.posObj, margin);
  },
    
  setTopMarginObj : function(id, obj, margin)
  {
  	var co = this.getObjectFromCell(id, obj.id);
  	this.topMarginObj(id, co.row, co.col, co.posObj, margin);
  },
  
  setBottomMarginObj : function(id, obj, margin)
  {
  	var co = this.getObjectFromCell(id, obj.id);
  	this.bottomMarginObj(id, co.row, co.col, co.posObj, margin);
  },
  
  setWidthSubCellObj : function(id, row, col, posObject, width)
  {
	var cont = this.objects[id].tableBody.rows[row].cells[col].firstChild;
	cont.rows[0].cells[posObject*2+1].width = width+'px';
  },
  
  alignObjToCell: function(id, row, col, align)
  {
    this.objects[id].tableBody.rows[row].cells[col].align = align;
  },
  
  vAlignObjToCell: function(id, row, col, vAlign)
  {
    this.objects[id].tableBody.rows[row].cells[col].vAlign = vAlign;
  },
  addSpace: function(id, row, col, space)
  {
    var actSizeRow = this.objects[id].tableBody.rows.length;
    while (actSizeRow <= row) 
    {
      this.objects[id].tableBody.insertRow(actSizeRow);
      actSizeRow = this.objects[id].tableBody.rows.length;
    }
    var actSizeCol = this.objects[id].tableBody.rows[row].cells.length;
    while (actSizeCol <= col) 
    {
      this.objects[id].tableBody.rows[row].insertCell(actSizeCol);
      actSizeCol = this.objects[id].tableBody.rows[row].cells.length;
    }
    this.objects[id].tableBody.rows[row].cells[col].style.width = space + "px";
  },
  addLn: function(id, row, col, lns)
  {
    var actSizeRow = this.objects[id].tableBody.rows.length;
    while (actSizeRow <= row) 
    {
      this.objects[id].tableBody.insertRow(actSizeRow);
      actSizeRow = this.objects[id].tableBody.rows.length;
    }
    var actSizeCol = this.objects[id].tableBody.rows[row].cells.length;
    while (actSizeCol <= col) 
    {
      this.objects[id].tableBody.rows[row].insertCell(actSizeCol);
      actSizeCol = this.objects[id].tableBody.rows[row].cells.length;
    }
    var s = "";
    this.objects[id].tableBody.rows[row].cells[col].style.height = 17*lns+'px';
    this.objects[id].tableBody.rows[row].cells[col].style.lineHeight = 17*lns+'px';
  },

  setRound : function(id)
  {
    /*
    this.objects[id].style.borderRadius='1em';
    this.objects[id].style.border='0px';
    this.objects[id].style.borderWidth='0px';
    this.objects[id].style.borderStyle='groove';
    this.objects[id].divTableTitle.style.borderTopLeftRadius='1em';
    this.objects[id].divTableTitle.style.borderTopRightRadius='1em';
    this.objects[id].buttonClose.style.borderWidth='1px';
    this.objects[id].buttonClose.style.borderRadius='1em';
    this.objects[id].buttonHelp.style.borderWidth='1px';
    this.objects[id].buttonHelp.style.borderRadius='1em';
    this.objects[id].buttonMin.style.borderWidth='1px';
    this.objects[id].buttonMin.style.borderRadius='1em';
    this.objects[id].divTableSts.style.borderBottomLeftRadius='1em';
    this.objects[id].divTableSts.style.borderBottomRightRadius='1em';
    this.objects[id].divTableSts.style.height='22px';
    */
  },

  showButtonHelp : function(id){
	this.objects[id].showButtonHelp = true;
	this.objects[id].buttonHelp.style.display = 'block';
  },
	
  hideButtonHelp : function(id){
	 this.objects[id].showButtonHelp = false;
	this.objects[id].buttonHelp.style.display = 'none';
  },
	
  isShowButtonHelp : function(id){
	return this.objects[id].showButtonHelp;
  },
	
  onClickButtonHelp : function(id, funct){
	  if(typeof funct==='string')
		  this.objects[id].onClickBtnHelp = new Function(funct);
	  else
		  this.objects[id].onClickBtnHelp = funct;
  },
	
  showHelp : function(w, h, tutorial){
	if(!w)
		w=400;
	if(!h)
		h=300;
	var ventHelp = window.open('help/tutorial/'+tutorial,'_blank','width='+w+',height='+h+'resizable=yes,scrollbars=yes,status=no,location=no');
  },
  
  create: function(id, x1, y1, x2, y2, title)
  {
    this.ids[this.ids.length] = id;
    if (this.objects[id] == null) 
      this.totaldialogsAdmi++;
    this.objects[id] = document.createElement("div");
    this.objects[id].showButtonHelp = false;
    this.objects[id].onClickBtnHelp = new Function('');
    this.objects[id].isFx = false;
    this.objects[id].nameComponent='dialogsAdmi';
    this.objects[id].actColor ='white';
    this.objects[id].ambiente = attrib.getActualEnv();
    this.objects[id].relativeObj = new Array();
	  this.objects[id].sts = this.STS_CREATE;
	  this.objects[id].staticOrder = false;
    this.objects[id].tempX1 = 0;
    this.objects[id].tempY1 = 0;
    this.objects[id].focusHere = false;
    this.objects[id].isModal = false;
    this.objects[id].submenu = new Array();
    this.objects[id].eventHideAllMenus = new Function('');
    this.objects[id].onHideDialogF = new Function('');
    this.objects[id].onShowDialogF = new Function('');
    this.objects[id].onClickCloseDialog = new Function('');
    this.objects[id].onClickMinimizeDlg = new Function('');
    this.objects[id].id = id;
    this.objects[id].idsPanelMenu = new Array();
    this.objects[id].minWindow = new Object();
    this.objects[id].minWindow.eventCloseDlg = new Function('');
    this.objects[id].minWindow.eventMinDlg = new Function('');
    this.objects[id].minWindow.eventShow = new Function('');
    this.objects[id].isClick = false;
    this.objects[id].loadBGImg = true;
    this.objects[id].order = this.totaldialogsAdmi;
    this.objects[id].style.zIndex = 50 * this.objects[id].order;
    this.objects[id].divModal = document.createElement("div");
    this.objects[id].divModal.style.position = "absolute";
    this.objects[id].divModal.style.display = "none";
    this.objects[id].divModal.style.top = '0px';
    this.objects[id].divModal.style.left = '0px';
    this.objects[id].divModal.style.width = document.documentElement.clientWidth  + 'px';
    this.objects[id].divModal.style.height = document.documentElement.clientHeight + 'px';
    document.body.appendChild(dialogsAdmi.objects[id].divModal);
    this.objects[id].isMaxScreen = false;
    this.objects[id].isMinScreen = false;
    this.objects[id].divBody = document.createElement("div");
    document.body.appendChild(this.objects[id]);
    this.objects[id].enableResize = true;
    this.objects[id].enableMinimize = true;
    this.objects[id].enableMaximize = true;
    this.objects[id].enableFullScreen = true;
    this.objects[id].x1 = x1;
    this.objects[id].x2 = x2;
    this.objects[id].y1 = y1;
    this.objects[id].y2 = y2;
    this.objects[id].widthDialog = x2 - x1;
    this.objects[id].heightDialog = y2 - y1;
    this.objects[id].heightBarSts = 20;
    this.objects[id].heightBarTitle = 20;
    this.objects[id].heightBarMenu = 0;
    this.objects[id].heightControlButtons = 20;
    this.objects[id].stsMsg = "";
    this.objects[id].minimizeX = 0;
    this.objects[id].minimizeY = 0;
    this.objects[id].titleDialog = title;
    this.objects[id].onBeforeMinimizeFunct = new Function("");
    this.objects[id].onAfterMinimizeFunct = new Function("");
    this.objects[id].onBeforeMaximizeFunct = new Function("");
    this.objects[id].onAfterMaximizeFunct = new Function("");
    this.objects[id].onDblClickTitleBarFunct = new Function("");
    this.objects[id].tableContainer = document.createElement("table");
    this.objects[id].tableContainer.setAttribute("border", "0");
    this.objects[id].tableContainer.setAttribute("cellPadding", "0");
    this.objects[id].tableContainer.setAttribute("cellSpacing", "0");
    this.objects[id].tableContainer.insertRow(0);
    this.objects[id].tableContainer.insertRow(1);
    this.objects[id].tableContainer.insertRow(2);
    this.objects[id].tableContainer.insertRow(3);
    this.objects[id].tableContainer.rows[0].insertCell(0);
    this.objects[id].tableContainer.rows[1].insertCell(0);
    this.objects[id].tableContainer.rows[2].insertCell(0);
    this.objects[id].tableContainer.rows[3].insertCell(0);
    this.objects[id].tableSts = document.createElement("table");
    this.objects[id].divTableSts = document.createElement("div");
    this.objects[id].divTableSts.appendChild(this.objects[id].tableSts);
    this.objects[id].tableSts.setAttribute("border", "0");
    this.objects[id].tableSts.setAttribute("cellPadding", "0");
    this.objects[id].tableSts.setAttribute("cellSpacing", "0");
    this.objects[id].tableSts.insertRow(0);
    this.objects[id].tableSts.rows[0].insertCell(0);
    this.objects[id].tableSts.rows[0].insertCell(1);
    this.objects[id].tableSts.rows[0].insertCell(2);
    this.objects[id].tableSts.rows[0].cells[0].style.width = '3%';
    this.objects[id].tableSts.rows[0].cells[1].style.width = '92%';
    this.objects[id].tableSts.rows[0].cells[2].style.width = '5%';
    this.objects[id].tableSts.style.width = this.objects[id].widthDialog + 'px';
    this.objects[id].tableContainer.rows[3].cells[0].appendChild(this.objects[id].divTableSts);
    this.objects[id].tableBody = document.createElement("table");
    this.objects[id].tableBody.setAttribute("border", "0");
    this.objects[id].tableBody.setAttribute("cellPadding", "0");
    this.objects[id].tableBody.setAttribute("cellSpacing", "0");
    this.objects[id].tableBody.style.borderWidth='0px';
    this.objects[id].tableBody.style.fontSize='0px';
    this.objects[id].tableTitle = document.createElement("table");
    this.objects[id].divTableTitle = document.createElement("div");
    this.objects[id].divTableTitle.appendChild(this.objects[id].tableTitle);
    this.objects[id].tableTitle.setAttribute("border", "0");
    this.objects[id].tableTitle.setAttribute("cellPadding", "0");
    this.objects[id].tableTitle.setAttribute("cellSpacing", "2");
    this.objects[id].tableTitleIcon = document.createElement("table");
    this.objects[id].tableTitleIcon.setAttribute("border", "0");
    this.objects[id].tableTitleIcon.setAttribute("cellPadding", "0");
    this.objects[id].tableTitleIcon.setAttribute("cellSpacing", "0");
    this.objects[id].tableTitleIcon.insertRow(0);
    this.objects[id].tableTitleIcon.rows[0].insertCell(0);
    this.objects[id].tableTitleIcon.rows[0].insertCell(1);
    this.objects[id].tableTitleIcon.rows[0].cells[0].align='center';
    this.objects[id].divIcon = document.createElement("div");
    this.objects[id].divIcon.style.borderRadius='1em';
    this.objects[id].divIcon.align = 'center';
    this.objects[id].divIcon.style.height = '20px';
    this.objects[id].divIcon.style.lineHeight = '20px';
    this.objects[id].divIcon.vAlign = 'middle';
    this.objects[id].divIcon.img = document.createElement("img");
    //this.objects[id].divIcon.img.src = this.iconImg;
    this.objects[id].divIcon.img.style.height = '20px';
    this.objects[id].divIcon.img.style.lineHeight = '20px';
    this.objects[id].divIcon.img.vAlign = 'middle';
    this.objects[id].divIcon.img.style.borderWidth = '0px';
    this.objects[id].divIcon.img.style.width = '20px';
    //this.objects[id].divIcon.appendChild(this.objects[id].divIcon.img);
    this.objects[id].tableTitleIcon.rows[0].cells[0].appendChild(this.objects[id].divIcon);
    this.objects[id].tableTitle.insertRow(0);
    this.objects[id].tableTitle.rows[0].insertCell(0);
    this.objects[id].tableTitle.rows[0].insertCell(1);
    this.objects[id].tableTitle.rows[0].insertCell(2);
    this.objects[id].tableTitle.rows[0].insertCell(3);
    this.objects[id].tableTitle.rows[0].insertCell(4);
    this.objects[id].tableTitle.rows[0].cells[4].style.width='2px';
    this.objects[id].tableTitle.rows[0].cells[0].appendChild(this.objects[id].tableTitleIcon); 
    this.objects[id].buttonClose = document.createElement("div");
    this.objects[id].buttonClose.align = 'center';
    this.objects[id].buttonClose.innerHTML = 'x';
    //this.objects[id].buttonClose.style.color = this.fontColorBottonControl;
    //this.objects[id].buttonClose.style.fontFamily = this.fontFamilyBottonControl;
    //this.objects[id].buttonClose.style.fontWeight = 'bold';
    //this.objects[id].buttonClose.style.borderColor = '#cecece';
    //this.objects[id].buttonClose.style.backgroundImage = 'url(' +this.bgImgPath+this.botonCloseImgPath + ')';
    //this.objects[id].buttonClose.style.borderStyle = "outset";
    //this.objects[id].buttonClose.style.borderWidth = "1px";
    //this.objects[id].buttonClose.style.fontSize = '12px';
    this.objects[id].buttonMin = document.createElement("div");
    this.objects[id].buttonMin.align = 'center';
    this.objects[id].buttonMin.innerHTML = '-';
    //this.objects[id].buttonMin.style.fontFamily = this.fontFamilyBottonControl;
    //this.objects[id].buttonMin.style.fontWeight = 'bold';
    //this.objects[id].buttonMin.style.backgroundImage = 'url(' +this.bgImgPath + this.botonMinImgPath + ')';
    //this.objects[id].buttonMin.style.color = this.fontColorBottonControl;
    //this.objects[id].buttonMin.style.borderStyle = 'outset';
    //this.objects[id].buttonMin.style.borderWidth = '1px';
    //this.objects[id].buttonMin.style.borderColor = '#cecece';
    //this.objects[id].buttonMin.style.fontSize = '12px';
    
    this.objects[id].buttonHelp = document.createElement("div");
    this.objects[id].buttonHelp.align = 'center';
    this.objects[id].buttonHelp.innerHTML = '?';
    //this.objects[id].buttonHelp.style.fontFamily = this.fontFamilyBottonControl;
    //this.objects[id].buttonHelp.style.fontWeight = 'bold';
    //this.objects[id].buttonHelp.style.backgroundImage = 'url(' +this.bgImgPath + this.botonMinImgPath + ')';
    //this.objects[id].buttonHelp.style.color = this.fontColorBottonControl;
    //this.objects[id].buttonHelp.style.borderStyle = 'outset';
    //this.objects[id].buttonHelp.style.borderWidth = '1px';
    //this.objects[id].buttonHelp.style.borderColor = '#cecece';
    //this.objects[id].buttonHelp.style.fontSize = '12px';
    
    this.objects[id].tableTitle.rows[0].cells[1].appendChild(this.objects[id].buttonHelp);
    this.objects[id].tableTitle.rows[0].cells[2].appendChild(this.objects[id].buttonMin);
    this.objects[id].tableTitle.rows[0].cells[3].appendChild(this.objects[id].buttonClose);
	  this.hideButtonHelp(id); 	        

  	try {
  	 	var jd = xmlHttpReq.json('getTutorial');
  		if(typeof jd !='undefined' && jd!=null) {
  			if(typeof json('getTutorial')==='object'){
  				for(var i=0; i<json('getTutorial').data[0].length; i++){
  					if(json('getTutorial').data[0][i].trim().toUpperCase()===title.trim().toUpperCase()){
  						this.showButtonHelp(id);	
  						this.onClickButtonHelp(id, 'dialogsAdmi.showHelp(400,300,\''+json('getTutorial').data[1][i]+'\')');
  						break;
  					}
  				}
  			}
  		}
  	}
  	catch(err) {}	 
    this.objects[id].divBody.appendChild(this.objects[id].tableBody);
    this.objects[id].tableContainer.rows[0].cells[0].appendChild(this.objects[id].divTableTitle);
    this.objects[id].tableContainer.rows[2].cells[0].appendChild(this.objects[id].divBody);
    this.objects[id].tableContainer.rows[2].cells[0].vAlign = "top";
    this.objects[id].tableContainer.rows[2].cells[0].align = "left";
    this.objects[id].appendChild(this.objects[id].tableContainer);    
    this.objects[id].tableTitle.rows[0].cells[2].style.width = "1px";
    this.objects[id].tableTitle.rows[0].cells[3].style.width = "1px";
    this.setWidth(id, this.objects[id].widthDialog);
    this.setBodyHeight(id, this.objects[id].heightDialog);
    this.setTitle(id, this.objects[id].titleDialog);
    this.alignTitle(id, this.TYPE_ALIGN_CENTER);
    this.setPosition(id, x1, y1);
    this.setHeightBarTitle(id, this.objects[id].heightBarTitle);
    this.setMsg(id, "&nbsp", false);
    this.setHeightBarSts(id, this.objects[id].heightBarSts);
    this.setHeightControlButtons(id, this.objects[id].heightControlButtons);
    this.setWidthControlButtons(id, this.objects[id].heightControlButtons);
    this.setBgColorBarTitle(id, "#cecece");
    this.setBgColorBarSts(id, "#eeeeee");
    this.alignTitle(id, 'center');
    
    /*
    this.objects[id].buttonMin.onmousedown = function()
    {
      dialogsAdmi.objects[id].buttonMin.style.borderStyle = 'inset';
    }
    this.objects[id].buttonMin.onmouseover = function()
    {
      dialogsAdmi.objects[id].buttonMin.style.cursor = "pointer";
    }
    this.objects[id].buttonMin.onmouseup = function()
    {
      dialogsAdmi.objects[id].buttonMin.style.borderStyle = 'outset';
    }
    this.objects[id].buttonMin.onmouseout = function()
    {
      dialogsAdmi.objects[id].buttonMin.style.borderStyle = 'outset';
      dialogsAdmi.objects[id].buttonMin.style.cursor = "default";
    }
    */
    this.objects[id].buttonMin.onclick = function()
    {
      dialogsAdmi.minimize(id);
      dialogsAdmi.objects[id].onClickMinimizeDlg();
      dialogsAdmi.objects[id].minWindow.eventMinDlg();
    }
    /*
    this.objects[id].buttonClose.onmouseover = function()
    {
      dialogsAdmi.objects[id].buttonClose.style.cursor = "pointer";
    }
    this.objects[id].buttonClose.onmousedown = function()
    {
      dialogsAdmi.objects[id].buttonClose.style.borderStyle = 'inset';
    }
    this.objects[id].buttonClose.onmouseout = function()
    {
      dialogsAdmi.objects[id].buttonClose.style.borderStyle = 'outset';
      dialogsAdmi.objects[id].buttonClose.style.cursor = "default";
    }
    this.objects[id].buttonClose.onmouseup = function()
    {
      dialogsAdmi.objects[id].buttonClose.style.borderStyle = 'outset';
    }
    */
    this.objects[id].buttonClose.onclick = function()
    {
      dialogsAdmi.hide(id);
      dialogsAdmi.objects[id].onClickCloseDialog();
      dialogsAdmi.objects[id].minWindow.eventCloseDlg();
      dialogsAdmi.objects[id].sts=dialogsAdmi.STS_CLOSE;
    }
    /*
    this.objects[id].buttonHelp.onmouseover = function()
    {
      dialogsAdmi.objects[id].buttonHelp.style.cursor = "pointer";
    }
    this.objects[id].buttonHelp.onmousedown = function()
    {
      dialogsAdmi.objects[id].buttonHelp.style.borderStyle = 'inset';
    }
    this.objects[id].buttonHelp.onmouseout = function()
    {
      dialogsAdmi.objects[id].buttonHelp.style.borderStyle = 'outset';
      dialogsAdmi.objects[id].buttonHelp.style.cursor = "default";
    }
    this.objects[id].buttonHelp.onmouseup = function()
    {
      dialogsAdmi.objects[id].buttonHelp.style.borderStyle = 'outset';
    }
    */
    this.objects[id].buttonHelp.onclick = function()
    {
    	dialogsAdmi.objects[id].onClickBtnHelp();
    }
    
    
    this.objects[id].onmousedown = function()
    {
      dialogsAdmi.sendToFrom(id);
    }

    this.objects[id].ondblclick = function()
    {
      dialogsAdmi.sendToFrom(id);
    }
    this.hide(id);
    this.setEvents(id);
    this.sendToFrom(id);
    this.remBlockModal(id);
    this.addPropertyMethod(id);
    this.setRound(id);
    if(attrib)
      this.setObjAttrib(id, attrib,attrib.getActualEnv());
    this.objects[id].sts = this.STS_CREATE;
    return this.objects[id];
  },
  
  close: function(id)
  {
	if (document.all) 
	  this.objects[id].buttonClose.click();
	else 
	{
	  this.hide(id);
	  dialogsAdmi.objects[id].minWindow.eventCloseDlg();
	}
	dialogsAdmi.objects[id].onClickCloseDialog();
	this.objects[id].sts = this.STS_CLOSE;  
  },
  
  closeAll: function()
  {  
	for(var i=0; i<this.ids.length; i++)
	{
	  var id = this.ids[i];	
  	  this.objects[id].sts = this.STS_CLOSE;
	  if (document.all) 
	    this.objects[id].buttonClose.click();
	  else 
	  {
	    this.hide(id);
	    dialogsAdmi.objects[id].minWindow.eventCloseDlg();
	  }  
	}
  },
  
  destroyDialog: function(id)
  {
    document.body.removeChild(dialogsAdmi.objects[id].divModal);
    document.body.removeChild(this.objects[id]);
  },
  
  setFocus: function(id)
  {
    var tid = this.ids.length;
    var i = 0;
    for (i = 0; i < tid; i++) 
    {
      this.objects[this.ids[i]].focusHere = false;
    }
    this.objects[id].focusHere = true;
  },
  
  getMouseXY: function(e)
  {
    var IE = document.all ? true : false;
    if (IE) 
    {
      dialogsAdmi.mouseX = event.clientX;
      dialogsAdmi.mouseY = event.clientY;
    }
    else 
    {
      dialogsAdmi.mouseX = e.pageX;
      dialogsAdmi.mouseY = e.pageY;
    }
    
    if (dialogsAdmi.mouseY < 10) 
    {
      dialogsAdmi.mouseY = 10;
    }
    if (dialogsAdmi.mouseX < 10) 
    {
      dialogsAdmi.mouseX = 10;
    }
  },
  
  getObject: function(id)
  {
    return this.objects[id];
  },
  
  hide: function(id)
  {
  	this.showHideBodyElements(id,false);
    dialogsAdmi.objects[id].eventHideAllMenus();
    this.remBlockModal(id);
    this.objects[id].style.display = "none";
    this.objects[id].onHideDialogF(); 
    dialogsAdmi.objects[id].sts=dialogsAdmi.STS_MINIMIZE;
  },
  
  hideAllSubMenu: function(id)
  {
    var topc = this.objects[id].idsPanelMenu.length;
    var i = 0;
    var idp = '';
    for (i = 0; i < topc; i++) 
    {
      idp = this.objects[id].idsPanelMenu[i];
      dialogsAdmi.objects[id].submenu[idp].panel.style.display = 'none';
    }
  },
  
  hideAllSubMenuFromLevel: function(id, level)
  {
    var topc = this.objects[id].idsPanelMenu.length;
    var i = 0;
    var idp = '';
    for (i = 0; i < topc; i++) 
    {
      idp = this.objects[id].idsPanelMenu[i];
      if (dialogsAdmi.objects[id].submenu[idp].level > level) 
      {
        dialogsAdmi.objects[id].submenu[idp].panel.style.display = 'none';
      }
    }
  },
  
  hideAllMenuForAllDlg: function()
  {
    var tid = this.ids.length;
    var i = 0;
    for (i = 0; i < tid; i++) 
    {
      this.hideAllSubMenu(this.ids[i]);
    }
  },
  
  maxLength: function(arrValues)
  {
    var lng = 0;
    var i = 0;
    var aux1 = '';
    var aux2 = '';
    for (i = 0; i < arrValues.length - 1; i++) 
    {
      aux1 = arrValues[i];
      aux2 = arrValues[i + 1];
      if (aux1.length > aux2.length) 
      {
        if (aux1.length > lng) 
          lng = aux1.length;
      }
      else 
      {
        if (aux2.length > lng) 
          lng = aux2.length;
      }
    }
    return lng;
  },
  
  minimize: function(id)
  {
    if (this.objects[id].enableMinimize) 
    {
      this.showHideBodyElements(id,false);
	  this.objects[id].sts = this.STS_MINIMIZE;	
      this.objects[id].isMinScreen = true;
      this.objects[id].onBeforeMinimizeFunct();
      this.objects[id].divBody.style.display = "none";
      this.setBodyHeight(id, 0);
      this.setHeightBarSts(id, 0);
      this.objects[id].tableSts.rows[0].cells[1].innerHTML = "";
      this.objects[id].style.left = this.objects[id].minimizeX + "px";
      this.objects[id].style.top = this.objects[id].minimizeY + "px";
      this.objects[id].buttonMin.onclick = function()
      {
        dialogsAdmi.maximize(id);
        dialogsAdmi.objects[id].onClickMinimizeDlg();
        dialogsAdmi.objects[id].minWindow.eventMinDlg();
      }
      this.setWidth(id, 120);
      var tempTitle = this.objects[id].titleDialog.charAt(0) +
      this.objects[id].titleDialog.charAt(1) +
      this.objects[id].titleDialog.charAt(2) +
      this.objects[id].titleDialog.charAt(3) +
      this.objects[id].titleDialog.charAt(4) +
      "...";
      this.setTitle(id, tempTitle);
      this.objects[id].onAfterMinimizeFunct();
      this.objects[id].buttonMin.innerHTML = '+';
      this.objects[id].tableSts.style.width = 120 + 'px';
      this.objects[id].tableContainer.style.width = 120 + 'px';
    }
  },
  
  maximize: function(id)
  {
    if (this.objects[id].enableMaximize) 
    {
      this.showHideBodyElements(id,true);
	  this.objects[id].sts = this.STS_SHOW;	
      this.objects[id].isMinScreen = false;
      this.objects[id].onBeforeMaximizeFunct();
      this.objects[id].divBody.style.display = "block";
      var y = this.objects[id].y2 - this.objects[id].y1;
      this.setBodyHeight(id, y);
      this.show(id);
      this.setHeightBarSts(id, this.objects[id].heightBarSts);
      this.objects[id].tableSts.rows[0].cells[1].innerHTML = this.objects[id].stsMsg;
      this.setPosition(id, this.objects[id].x1, this.objects[id].y1);
      this.setWidth(id, this.objects[id].widthDialog);
      this.setTitle(id, this.objects[id].titleDialog);
      this.objects[id].onAfterMaximizeFunct();
      this.objects[id].buttonMin.innerHTML = '-';
      this.objects[id].buttonMin.onclick = function()
      {
        dialogsAdmi.minimize(id);
        dialogsAdmi.objects[id].onClickMinimizeDlg();
        dialogsAdmi.objects[id].minWindow.eventMinDlg();
      }
      var wtc = dialogsAdmi.objects[id].tableContainer.rows[0].offsetWidth - 5;
      var wts = dialogsAdmi.objects[id].tableSts.style.offsetWidth;
      if (wtc < 0) 
      {
        wtc = 0;
      }
      dialogsAdmi.objects[id].tableSts.style.width = wtc + 'px';
      dialogsAdmi.objects[id].tableContainer.style.width = wtc + 'px';
    }
  },
  
  onHideDialog: function(id, funct)
  {
    this.objects[id].onHideDialogF = new Function(funct);
  },
  
  onShowDialog: function(id, funct)
  {
    this.objects[id].onShowDialogF = new Function(funct);
  },
  
  onClickDialog: function(id, funct)
  {
    this.objects[id].onclick = new Function(funct);
  },
  
   onClickMinimizeDialog: function(id, funct, sts)
  {
    dialogsAdmi.objects[id].enableMinimize = sts;
    dialogsAdmi.objects[id].onClickMinimizeDlg = new Function(funct);
  },
  
  
  onClickCloseDialog: function(id, funct)
  {
    dialogsAdmi.objects[id].onClickCloseDialog = new Function(funct);
  },
  
  onClickStsBar: function(id, funct)
  {
    this.objects[id].tableContainer.rows[3].cells[0].onclick = new Function(funct);
  },
  
  onDblClickStsBar: function(id, funct)
  {
    this.objects[id].tableContainer.rows[3].cells[0].ondblclick = new Function(funct);
  },
  
  onDblClickDialog: function(id, funct)
  {
    this.objects[id].ondblclick = new Function(funct);
  },
  
  onBeforeMinimize: function(id, funct)
  {
    this.objects[id].onBeforeMinimizeFunct = new Function(funct);
  },
  
  onAfterMinimize: function(id, funct)
  {
    this.objects[id].onAfterMinimizeFunct = new Function(funct);
  },
  
  onBeforeMaximize: function(id, funct)
  {
    this.objects[id].onBeforeMaximizeFunct = new Function(funct);
  },
  
  onAfterMaximize: function(id, funct)
  {
    this.objects[id].onAfterMaximizeFunct = new Function(funct);
  },
  
  setStsModal : function(id)
  {
  	this.objects[id].isModal=true;
  },
  
  setSizeCell : function(id,row,col,width,height)
  {
  	this.objects[id].tableBody.rows[row].cells[col].style.width = width+'px';
	this.objects[id].tableBody.rows[row].cells[col].style.height = height+'px';
  },
  
  setWidthCell : function(id,row,col,width)
  {
  	this.objects[id].tableBody.rows[row].cells[col].style.width = width+'px';
  },
  
  setHeightCell : function(id,row,col,height)
  {
	this.objects[id].tableBody.rows[row].cells[col].style.height   = height+'px';
	this.objects[id].tableBody.rows[row].cells[col].style.lineHeight = height+'px';
	//this.objects[id].tableBody.rows[row].cells[col].style.fontSize = height+'px';
  },

  setSubMenu: function(id, structSubMenuDlg)
  {
    this.objects[id].idsPanelMenu[this.objects[id].idsPanelMenu.length] = structSubMenuDlg.idPanelMenu;
    dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu] = new Object();
    dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu] = structSubMenuDlg;
    var sizeFont = dialogsAdmi.menuProperty.fontSize;
    var heightOpc = parseInt(sizeFont * 2.5,10);
    var sizeFlecha = dialogsAdmi.menuProperty.sizeFlecha;
    dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel = document.createElement('div');
    dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel = document.createElement('table');
    dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.appendChild(dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel);
    document.body.appendChild(dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel);
    dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.setAttribute("border", "0");
    dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.setAttribute("cellPadding", "0");
    dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.setAttribute("cellSpacing", "0");
    dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.img = new Array;
    dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.imgArrow = document.createElement('img');
    dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.imgArrow.src = dialogsAdmi.menuProperty.imgArrow;
    dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.imgArrow.style.width = sizeFlecha + 'px';
    dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.imgArrow.style.height = sizeFlecha + 'px';
    dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.style.borderStyle = dialogsAdmi.menuProperty.borderStylePanel;
    dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.style.borderWidth = dialogsAdmi.menuProperty.borderWidthPanel + 'px';
    
    var i = 0;
    var wRow = 0;
    for (i = 0; i < structSubMenuDlg.captions.length; i++) 
    {
      dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.img[i] = document.createElement('img');
      dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.img[i].src = structSubMenuDlg.icons[i];
      dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.img[i].style.width = parseInt(heightOpc/1.5,10) + 'px';
      dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.img[i].style.height = parseInt(heightOpc/1.5,10) + 'px';
      dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.img[i].align='center';
      dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.insertRow(i);
      dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.rows[i].row = i;
      dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.rows[i].insertCell(0);
      dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.rows[i].insertCell(1);
      dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.rows[i].insertCell(2);
      dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.rows[i].cells[0].width = (heightOpc + 5) + 'px';
      dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.rows[i].cells[0].height = heightOpc + 'px';
      dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.rows[i].cells[2].width = (sizeFlecha + 12) + 'px';
      dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.rows[i].cells[1].innerHTML = structSubMenuDlg.captions[i]; 
      if (structSubMenuDlg.icons[i] != '') 
      {
        dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.rows[i].cells[0].appendChild(dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.img[i]);
      }
      if (structSubMenuDlg.subMenues[i] != 0) 
      {
        dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.rows[i].cells[2].appendChild(dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.imgArrow);
        dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.rows[i].cells[2].align = 'center';
      }
      if (dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].enableOption[i]) 
      {
        dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.rows[i].style.color = dialogsAdmi.menuProperty.colorTextSubMenu;
      }
      else 
      {
        dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.rows[i].style.color = dialogsAdmi.menuProperty.colorTextDisable;
      }
      dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.rows[i].style.fontFamily = dialogsAdmi.menuProperty.fontFamily;
      dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.rows[i].style.fontWeight = dialogsAdmi.menuProperty.fontWeight;
      dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.rows[i].style.fontSize = dialogsAdmi.menuProperty.fontSize + 'px';
      if (wRow < dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.rows[i].offsetWidth) 
      {
        wRow = dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.rows[i].offsetWidth;
      }
      dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.rows[i].onmousedown = function(e)
      {
        if (dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].enableOption[this.row]) 
        {
          dialogsAdmi.hideAllSubMenu(id);
          var f = new Function(dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].functs[this.row]);
          f();
        }
      }
      dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.rows[i].onmouseover = function(e)
      {
        if (dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].enableOption[this.row]) 
        {
          dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.rows[this.row].style.backgroundImage = dialogsAdmi.menuProperty.imgBarSelected;
          dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.rows[this.row].style.color = dialogsAdmi.menuProperty.colorTextSelected;
          dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.style.cursor = "pointer";
          if (dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].subMenues[this.row] != 0) 
          {
            var idsm = dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].subMenues[this.row];
            dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].show(idsm)
          }
          else 
          {
            dialogsAdmi.hideAllSubMenuFromLevel(id, dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].level);
          }
        }
      }
      dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.rows[i].onmouseout = function(e)
      {
        if (dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].enableOption[this.row]) 
        {
          dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.style.cursor = "default";
          dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.rows[this.row].style.backgroundImage = '';
          dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.rows[this.row].style.color = dialogsAdmi.menuProperty.colorTextSubMenu;
        }
      }
      dialogsAdmi.objects[id].eventHideAllMenus = function()
      {
        dialogsAdmi.hideAllSubMenu(id);
      }
    }
    var hRow = dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.tablaPanel.offsetHeight;
    dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].widthOption = wRow;
    dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].heightPanel = hRow;
    dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.style.backgroundImage = dialogsAdmi.menuProperty.imgPanel;
    dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.style.width = dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].widthOption + 'px';
    dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.style.height = hRow + 'px';
    dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.style.left = dialogsAdmi.objects[id].x1 + 'px';
    dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.style.top = dialogsAdmi.objects[id].y1 + 'px';
    dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.style.position = 'absolute';
    dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].panel.style.display = 'none';
    dialogsAdmi.objects[id].submenu[structSubMenuDlg.idPanelMenu].show = function(idp)
    {
      var yPos = -1;
      var xPos = -1;
      dialogsAdmi.objects[id].submenu[idp].panel.style.zIndex = dialogsAdmi.objects[id].style.zIndex + 1;
      var parentMenu = dialogsAdmi.objects[id].submenu[idp].parentMenu;
      if (parentMenu.level == 0) 
      {
        dialogsAdmi.hideAllSubMenu(id);       
        yPos = dialogsAdmi.objects[id].menu.y;
        var c = 0
        var w = 0;
        if (dialogsAdmi.objects[id].submenu[idp].parentOpc > 0) 
        {
          for (c = 0; c < dialogsAdmi.objects[id].submenu[idp].parentOpc; c++) 
          {
            w += dialogsAdmi.objects[id].menu.widthOption[c];
          }
          xPos = dialogsAdmi.objects[id].x1 + w;
        }
        else 
        {
          xPos = dialogsAdmi.objects[id].x1 + 2;
        }
      }
      else 
      {
        yPos = parentMenu.posY + (parentMenu.parentOpc + 1) * heightOpc + 5;
        xPos = parentMenu.posX + parentMenu.widthOption + (parentMenu.level + 1) * dialogsAdmi.menuProperty.borderWidthPanel;
      }
      dialogsAdmi.objects[id].submenu[idp].panel.style.position = 'absolute';
      dialogsAdmi.objects[id].submenu[idp].panel.style.left = xPos + 'px';
      dialogsAdmi.objects[id].submenu[idp].panel.style.top = yPos + 'px';
      dialogsAdmi.objects[id].submenu[idp].panel.style.display = 'block';
      dialogsAdmi.objects[id].submenu[idp].posX = xPos;
      dialogsAdmi.objects[id].submenu[idp].posY = yPos;
    }
  },
  
  setMenu: function(id, structMenuDlg)
  {
  	dialogsAdmi.objects[id].menu = structMenuDlg;
    dialogsAdmi.objects[id].menu.isClick = false;
    dialogsAdmi.objects[id].menu.widthOption = new Array();
    dialogsAdmi.objects[id].tablaMenu = document.createElement('table');
    dialogsAdmi.objects[id].tablaMenu.setAttribute("border", "0");
    dialogsAdmi.objects[id].tablaMenu.setAttribute("cellPadding", "0");
    dialogsAdmi.objects[id].tablaMenu.setAttribute("cellSpacing", "0");
    dialogsAdmi.objects[id].tablaMenu.insertRow(0);
    dialogsAdmi.objects[id].heightBarMenu = 18;
    if (dialogsAdmi.objects[id].loadBGImg) 
    {
      dialogsAdmi.objects[id].tableContainer.rows[1].cells[0].style.backgroundImage = dialogsAdmi.menuProperty.imgBar;
    }
    dialogsAdmi.objects[id].tableContainer.rows[1].cells[0].appendChild(dialogsAdmi.objects[id].tablaMenu);
    dialogsAdmi.objects[id].tablaMenu.style.fontSize = dialogsAdmi.menuProperty.fontSize + 'px';
    dialogsAdmi.objects[id].tablaMenu.style.fontFamily = dialogsAdmi.menuProperty.fontFamily;
    dialogsAdmi.objects[id].tableContainer.rows[1].cells[0].style.borderStyle = dialogsAdmi.menuProperty.borderStyle;
    dialogsAdmi.objects[id].tablaMenu.style.height = (dialogsAdmi.menuProperty.fontSize * 2) + 'px';
    var totMenu = dialogsAdmi.objects[id].menu.captions.length;
    var i = 0;
    var idp = 0;
    for (i = 0; i < totMenu; i++) 
    {
      dialogsAdmi.objects[id].tablaMenu.rows[0].insertCell(i);
      var lenOpction = dialogsAdmi.objects[id].menu.captions[i].length;
      var sizeFont = dialogsAdmi.menuProperty.fontSize;
      dialogsAdmi.objects[id].menu.widthOption[i] = parseInt(lenOpction * (sizeFont - 2) * 75 / 100, 10);
      dialogsAdmi.objects[id].tablaMenu.rows[0].cells[i].innerHTML = dialogsAdmi.objects[id].menu.captions[i];
      if (dialogsAdmi.objects[id].menu.enableOption[i]) 
      {
        dialogsAdmi.objects[id].tablaMenu.rows[0].cells[i].style.color = dialogsAdmi.menuProperty.colorText;
      }
      else 
      {
        dialogsAdmi.objects[id].tablaMenu.rows[0].cells[i].style.color = dialogsAdmi.menuProperty.colorTextDisable;
      }
      dialogsAdmi.objects[id].tablaMenu.rows[0].cells[i].cell = i;
      dialogsAdmi.objects[id].tablaMenu.rows[0].cells[i].style.height = dialogsAdmi.objects[id].heightBarMenu+'px';
      dialogsAdmi.objects[id].tablaMenu.rows[0].cells[i].style.width = dialogsAdmi.objects[id].menu.widthOption[i] + 'px';
      dialogsAdmi.objects[id].tablaMenu.rows[0].cells[i].align = 'center';
      dialogsAdmi.objects[id].tablaMenu.rows[0].cells[i].onmouseover = function(e)
      {
        if (dialogsAdmi.objects[id].focusHere) 
        {
          dialogsAdmi.objects[id].tablaMenu.rows[0].cells[this.cell].style.cursor = "pointer";
          if (dialogsAdmi.objects[id].menu.enableOption[this.cell]) 
          {
            var valY1 = parseInt(dialogsAdmi.objects[id].y1, 10);
            var valY2 = parseInt(dialogsAdmi.objects[id].heightBarMenu, 10);
            var valY3 = parseInt(dialogsAdmi.objects[id].heightBarTitle, 10);
            var valY = valY1 + valY2 + valY3;
            dialogsAdmi.objects[id].tablaMenu.rows[0].cells[this.cell].style.color = dialogsAdmi.menuProperty.colorTextSelected;
            dialogsAdmi.objects[id].tablaMenu.rows[0].cells[this.cell].style.fontWeight = dialogsAdmi.menuProperty.fontWeightSelected;
            dialogsAdmi.objects[id].menu.y = valY + 8;
            if (dialogsAdmi.objects[id].loadBGImg) 
            {
              dialogsAdmi.objects[id].tablaMenu.rows[0].cells[this.cell].style.backgroundImage = dialogsAdmi.menuProperty.imgBarSelected;
              //dialogsAdmi.objects[id].tablaMenu.rows[0].cells[this.cell].style.backgroundColor = 'darkblue';
              idp = dialogsAdmi.objects[id].menu.subMenues[this.cell];
              if (dialogsAdmi.objects[id].menu.isClick) 
              {
                dialogsAdmi.objects[id].submenu[idp].show(idp);
              }
            }
            else 
            {
            }
          }
        }
      }
      dialogsAdmi.objects[id].tablaMenu.rows[0].cells[i].onmousedown = function(e)
      {
      	dialogsAdmi.setFocus(id);
        if (dialogsAdmi.objects[id].focusHere) 
        {
          if (dialogsAdmi.objects[id].menu.enableOption[this.cell]) 
          {
            if (dialogsAdmi.objects[id].menu.isClick) 
            {
              dialogsAdmi.hideAllSubMenu(id);
              dialogsAdmi.objects[id].menu.isClick = false;
            }
            else 
            {
              idp = dialogsAdmi.objects[id].menu.subMenues[this.cell];
              dialogsAdmi.objects[id].submenu[idp].show(idp);
              dialogsAdmi.objects[id].menu.isClick = true;
            }
          }
        }
      }
      dialogsAdmi.objects[id].tablaMenu.rows[0].cells[i].onmouseout = function(e)
      {
        if (dialogsAdmi.objects[id].focusHere) 
        {
          dialogsAdmi.objects[id].tablaMenu.rows[0].cells[this.cell].style.cursor = "default";
          if (dialogsAdmi.objects[id].menu.enableOption[this.cell]) 
          {
            dialogsAdmi.objects[id].tablaMenu.rows[0].cells[this.cell].style.color = dialogsAdmi.menuProperty.colorText;
            dialogsAdmi.objects[id].tablaMenu.rows[0].cells[this.cell].style.fontWeight = dialogsAdmi.menuProperty.fontWeight;
			if (dialogsAdmi.objects[id].loadBGImg) 
            {
              dialogsAdmi.objects[id].tablaMenu.rows[0].cells[this.cell].style.backgroundImage = '';
			  idp = dialogsAdmi.objects[id].menu.subMenues[this.cell];
            }
            else 
            {
            }
          }
        }
      }
    }
  },
  
  setBgBarImg: function(id, barImg)
  {
  	/*this.objects[id].divTableTitle.style.backgroundImage = "url(" + this.bgImgPath + barImg + ")";
    this.objects[id].divTableSts.style.backgroundImage = "url(" + this.bgImgPath + barImg + ")";
    this.objects[id].style.backgroundImage = "url(" + this.bgImgPath + barImg + ")";
    */
  },
  
  setBgBodyImg: function(id, bgImg)
  {
  /*
	  if (bgImg != dialogsAdmi.transparecyBgImg) 
		  this.objects[id].style.backgroundImage = "url(" + this.bgImgPath + bgImg + ")";
	  else
		  this.objects[id].style.backgroundImage = "url(" + bgImg + ")";
	*/
  },
  
  setBgBotonClose: function(id, bgImg)
  {
  	//this.objects[id].buttonClose.style.backgroundImage = 'url(' +this.bgImgPath + bgImg + ')';
  },
  
  updateBgBodyImg: function(id, bgImg)
  {
  	//this.bgImgDlg = bgImg;
  },
  
  showHideBodyElements : function(id,sts) 
  {
    if(sts)
      this.showAllRelativeObj(id)
    else
      this.hideAllRelativeObj(id);
  	if(window.powerComboBox!=undefined && window.powerComboBox!=null)
  	{
  	   var tpc = powerComboBox.ids.length;
  	   for(var i=0; i<tpc; i++)
  	   {
  	   	 powerComboBox.objects[powerComboBox.ids[i]].panel.style.display = 'none';
  	   } 	
  	}
  	var tr = this.objects[id].tableBody.rows.length;
  	for(var i=0; i<tr; i++)
  	{
  	  var tc = this.objects[id].tableBody.rows[i].cells.length;
  	  for(var j=0; j<tc; j++)
  	  {
  		var cont = this.objects[id].tableBody.rows[i].cells[j].firstChild;
  	    if(this.objects[id].tableBody.rows[i].cells[j].typeElement=='table')
  		{
  		  var tcc = cont.rows[1].cells.length;
  		  for(var k=0; k<tcc; k++)
  		  {
  		    var ele = cont.rows[1].cells[k].firstChild;
  		  	if(ele!=null)
  		  	{
  		  	  if(sts){
			    ele.style.display = 'block';
			    if(ele.nameComponent == 'imgButtons'){
			      if(!ele.sts_Show)
			        ele.style.display='none'; 
				}
			  }
			  else
			  {
			    ele.style.display='none';
			    if(ele.nameComponent=='calendars')
			    {
			   	  ele.cloneObj.hide();
			    }
			    if(ele.nameComponent=='powerComboBox')
			    {
			      	ele.panel.style.display = 'none';
			    }
			  }	
  		  	}
  		  }	
  		}	
  	  }
  	}
    
  },
  setEvents: function(id)
  {
    dialogsAdmi.objects[id].tableContainer.rows[2].cells[0].onmousedown = function(e)
    {
      dialogsAdmi.hideAllMenuForAllDlg();
    }
    dialogsAdmi.objects[id].tableTitle.rows[0].cells[0].onmousedown = function(e)
    {
      dialogsAdmi.showHideBodyElements(id,false);	
  	  if (dialogsAdmi.objects[id].loadBGImg) 
	    dialogsAdmi.setBgBodyImg(id, dialogsAdmi.transparecyBgImg);
      dialogsAdmi.objects[id].style.opacity = 0.6;
      dialogsAdmi.hideAllMenuForAllDlg();
      dialogsAdmi.objects[id].isClick = true;
      dialogsAdmi.objects[id].tableTitle.rows[0].cells[0].style.cursor = "pointer";
      dialogsAdmi.getMouseXY(e);
      dialogsAdmi.mouseXDown = dialogsAdmi.mouseX;
      dialogsAdmi.mouseYDown = dialogsAdmi.mouseY;
      document.onmousemove = function(e)
      {
        document.onmousedown = function(e)
        {
          dialogsAdmi.hideAllMenuForAllDlg();
        }
        if (dialogsAdmi.objects[id].isClick) 
        {
          dialogsAdmi.getMouseXY(e);
          var difX = dialogsAdmi.mouseX - dialogsAdmi.mouseXDown;
          var difY = dialogsAdmi.mouseY - dialogsAdmi.mouseYDown;
          var newX = dialogsAdmi.objects[id].x1 + difX;
          var newY = dialogsAdmi.objects[id].y1 + difY;
          if (!dialogsAdmi.objects[id].isMaxScreen && (!dialogsAdmi.objects[id].isMinScreen)) 
          {
            dialogsAdmi.setPosition(id, newX, newY);
          }
          dialogsAdmi.mouseXDown = dialogsAdmi.mouseX;
          dialogsAdmi.mouseYDown = dialogsAdmi.mouseY;
        }
      }
      dialogsAdmi.objects[id].tableTitle.rows[0].cells[0].onmouseout = function(e)
      {
        dialogsAdmi.getMouseXY(e);
        dialogsAdmi.objects[id].tableTitle.rows[0].cells[0].style.cursor = "default";
        var difX = dialogsAdmi.mouseX - dialogsAdmi.mouseXDown;
        var difY = dialogsAdmi.mouseY - dialogsAdmi.mouseYDown;
        var newX = dialogsAdmi.objects[id].x1 + difX;
        var newY = dialogsAdmi.objects[id].y1 + difY;
        if (!dialogsAdmi.objects[id].isMaxScreen && (!dialogsAdmi.objects[id].isMinScreen)) 
        {
          dialogsAdmi.setPosition(id, newX, newY);
        }
        dialogsAdmi.mouseXDown = dialogsAdmi.mouseX;
        dialogsAdmi.mouseYDown = dialogsAdmi.mouseY;
        dialogsAdmi.objects[id].tableTitle.rows[0].cells[0].onmouseout = new Function("");
      }
    }
    this.objects[id].tableTitle.rows[0].cells[0].onmouseover = function(e)
    {
      dialogsAdmi.objects[id].tableTitle.rows[0].cells[0].style.cursor='pointer';	
    }
    this.objects[id].tableTitle.rows[0].cells[0].onmousemove = function(e)
    {
      dialogsAdmi.objects[id].tableTitle.rows[0].cells[0].style.cursor='pointer';	
    }
    this.objects[id].tableTitle.rows[0].cells[0].onmouseup = function(e)
    {
      dialogsAdmi.objects[id].tableTitle.rows[0].cells[0].style.cursor='default';	
      dialogsAdmi.showHideBodyElements(id,true);	
	  if (dialogsAdmi.objects[id].loadBGImg) 
 	    dialogsAdmi.setBgBodyImg(id, dialogsAdmi.bgImgDlg);
    dialogsAdmi.objects[id].style.opacity = 1;
	  dialogsAdmi.objects[id].isClick = false;
      dialogsAdmi.objects[id].tableTitle.rows[0].cells[0].style.cursor = "default";
      dialogsAdmi.getMouseXY(e);
      if (!dialogsAdmi.objects[id].isMaxScreen && (!dialogsAdmi.objects[id].isMinScreen)) 
      {
        dialogsAdmi.setPosition(id, dialogsAdmi.objects[id].x1, dialogsAdmi.objects[id].y1);
      }
      document.onmousemove = new Function("");
      dialogsAdmi.objects[id].tableTitle.rows[0].cells[0].onmouseout = new Function("");
      document.onmousedown = new Function("");
      dialogsAdmi.setEvents(id);
      dialogsAdmi.isClick = false;
    },    
    this.objects[id].divModal.onmouseup = function(e)
    {
      dialogsAdmi.objects[id].isClick = false;
      dialogsAdmi.getMouseXY(e);
      if (!dialogsAdmi.objects[id].isMaxScreen && (!dialogsAdmi.objects[id].isMinScreen)) 
      {
        dialogsAdmi.setPosition(id, dialogsAdmi.objects[id].x1, dialogsAdmi.objects[id].y1);
      }
      dialogsAdmi.objects[id].tableTitle.rows[0].cells[0].style.cursor = "default";
      dialogsAdmi.objects[id].tableTitle.rows[0].cells[0].onmousemove = new Function("");
      dialogsAdmi.objects[id].tableTitle.rows[0].cells[0].onmouseout = new Function("");
      dialogsAdmi.objects[id].tableTitle.rows[0].cells[0].onmousedown = new Function("");
      dialogsAdmi.isClick = false;
      dialogsAdmi.setEvents(id);
    }
    
    this.objects[id].divModal.onmousemove = function(e)
    {
      if (dialogsAdmi.objects[id].isClick) 
      {
        dialogsAdmi.getMouseXY(e);
      }
    }
    this.objects[id].tableTitle.rows[0].cells[0].ondblclick = function(e)
    {
      dialogsAdmi.hideAllMenuForAllDlg();
      if (!dialogsAdmi.objects[id].isMaxScreen) 
      {
        dialogsAdmi.objects[id].isMaxScreen = true;
        dialogsAdmi.setFullScreen(id);
      }
      else 
      {
        dialogsAdmi.setPriorPosition(id);
        dialogsAdmi.maximize(id);
        dialogsAdmi.objects[id].isMaxScreen = false;
      }
    }
    dialogsAdmi.objects[id].tableContainer.rows[2].cells[0].onmouseup = function(e)
    {
      dialogsAdmi.isClick = false;
    }
    dialogsAdmi.objects[id].tableContainer.rows[2].cells[0].onmousemove = function(e)
    {
      dialogsAdmi.getMouseXY(e);
      var dx = dialogsAdmi.objects[id].x2 - 5;
      var diffX = parseInt(dialogsAdmi.mouseX) - dx;
      if ((diffX > -2) && (diffX < 10)) 
      {
        dialogsAdmi.objects[id].style.cursor = "w-resize";
        dialogsAdmi.objects[id].tableContainer.rows[2].cells[0].onmousedown = function(e)
        {
          dialogsAdmi.getMouseXY(e);
          var dx = dialogsAdmi.objects[id].x2 - 5;
          var diffX = parseInt(dialogsAdmi.mouseX) - dx;
          if ((diffX > -2) && (diffX < 10)) 
          {
            dialogsAdmi.isClick = true;
          }
          else 
          {
            dialogsAdmi.isClick = false;
          }
          dialogsAdmi.hideAllMenuForAllDlg();
          document.onmousemove = function(e)
          {
            dialogsAdmi.getMouseXY(e);
            var dx = dialogsAdmi.objects[id].x2 - 5;
            var diffX = parseInt(dialogsAdmi.mouseX) - dx;
            if (dialogsAdmi.isClick) 
            {
              if ((dialogsAdmi.objects[id].enableResize)) 
              {
                var wtt = dialogsAdmi.objects[id].tableTitle.offsetWidth;
                var wtc = dialogsAdmi.objects[id].tableContainer.offsetWidth;
                var dw = wtc - wtt;
                if (!((dw > 4) && (diffX < 0))) 
                {
                  dialogsAdmi.objects[id].x2 += diffX;
                  dialogsAdmi.objects[id].widthDialog += diffX;
                  dialogsAdmi.setResizeDialog(id, dialogsAdmi.objects[id].widthDialog, dialogsAdmi.objects[id].heightDialog);
                  dialogsAdmi.objects[id].tableSts.style.width = dialogsAdmi.objects[id].widthDialog + 'px';
                  dialogsAdmi.objects[id].tableContainer.style.width = dialogsAdmi.objects[id].widthDialog + 'px';
                }
              }
            }
            
          }
          document.onmouseup = function(e)
          {
            dialogsAdmi.objects[id].style.cursor = "default";
          }
        }
      }
      else 
      {
        dialogsAdmi.objects[id].style.cursor = "default";
      }
    }
    dialogsAdmi.objects[id].tableSts.rows[0].cells[2].onmouseover = function(e)
    {
      dialogsAdmi.objects[id].tableSts.rows[0].cells[2].style.cursor = "nw-resize";
    }
    
    dialogsAdmi.objects[id].tableSts.rows[0].cells[1].onmouseover = function(e)
    {
      dialogsAdmi.objects[id].tableSts.rows[0].cells[1].style.cursor = "s-resize";
    }
    
    dialogsAdmi.objects[id].tableContainer.rows[3].cells[0].onmouseout = function(e)
    {
      dialogsAdmi.objects[id].tableSts.rows[0].cells[2].style.cursor = "default";
      var wtc = dialogsAdmi.objects[id].tableContainer.rows[0].offsetWidth - 5;
      var wts = dialogsAdmi.objects[id].tableSts.style.offsetWidth;
      if (wtc < 0) 
      {
        wtc = 0;
      }
      dialogsAdmi.objects[id].tableSts.style.width = wtc + 'px';
      dialogsAdmi.objects[id].tableContainer.style.width = wtc + 'px';
      dialogsAdmi.objects[id].tableSts.style.offsetWidth = wtc + 'px';
      dialogsAdmi.objects[id].tableContainer.style.offsetWidth = wtc + 'px';
    }
    dialogsAdmi.objects[id].tableSts.rows[0].cells[2].onmousedown = function(e)
    {
      dialogsAdmi.hideAllMenuForAllDlg();
      dialogsAdmi.isClick = true;
      dialogsAdmi.objects[id].isClick = true;
      document.onmousemove = function(e)
      {
        dialogsAdmi.objects[id].tableSts.rows[0].cells[2].style.cursor = "nw-resize";
        if (dialogsAdmi.objects[id].isClick) 
        {
          dialogsAdmi.getMouseXY(e);
          var dY = parseInt(dialogsAdmi.objects[id].heightBarSts, 10);
          dY += parseInt(dialogsAdmi.objects[id].heightBarTitle, 10);
          dY += parseInt(dialogsAdmi.objects[id].y2, 10);
          dY += dialogsAdmi.objects[id].heightBarMenu;
          dy = parseInt(dY, 10);
          var dx = dialogsAdmi.objects[id].x2 - 5;
          var diffX = parseInt(dialogsAdmi.mouseX) - dx;
          var diffY = parseInt(dialogsAdmi.mouseY) - dy;
          if (dialogsAdmi.isClick) 
          {
            if ((dialogsAdmi.objects[id].enableResize)) 
            {
              var wtt = dialogsAdmi.objects[id].tableTitle.offsetWidth;
              var wtc = dialogsAdmi.objects[id].tableContainer.offsetWidth;
              var dw = wtc - wtt;
              
              if (!((dw > 4) && (diffX < 0))) 
              {
                dialogsAdmi.objects[id].x2 += diffX;
                dialogsAdmi.objects[id].y2 += diffY;
                dialogsAdmi.objects[id].widthDialog += diffX;
                dialogsAdmi.objects[id].heightDialog += diffY;
                dialogsAdmi.setResizeDialog(id, dialogsAdmi.objects[id].widthDialog, dialogsAdmi.objects[id].heightDialog);
                dialogsAdmi.objects[id].tableSts.style.width = dialogsAdmi.objects[id].widthDialog + 'px';
                dialogsAdmi.objects[id].tableTitle.style.width = dialogsAdmi.objects[id].widthDialog + 'px';
                dialogsAdmi.objects[id].tableContainer.style.width = dialogsAdmi.objects[id].widthDialog + 'px';
              }
            }
          }
        }
      }
    }
    
    dialogsAdmi.objects[id].tableSts.rows[0].cells[1].onmousedown = function(e)
    {
      dialogsAdmi.hideAllMenuForAllDlg();
      dialogsAdmi.isClick = true;
      dialogsAdmi.objects[id].isClick = true;
      document.onmousemove = function(e)
      {
        dialogsAdmi.objects[id].tableSts.rows[0].cells[1].style.cursor = "s-resize";
        if (dialogsAdmi.objects[id].isClick) 
        {
          dialogsAdmi.getMouseXY(e);
          var dY = parseInt(dialogsAdmi.objects[id].heightBarSts, 10);
          dY += parseInt(dialogsAdmi.objects[id].heightBarTitle, 10);
          dY += parseInt(dialogsAdmi.objects[id].y2, 10);
          dY += dialogsAdmi.objects[id].heightBarMenu;
          dy = parseInt(dY, 10);
          var diffY = parseInt(dialogsAdmi.mouseY) - dy;
          if (dialogsAdmi.isClick) 
          {
            if ((dialogsAdmi.objects[id].enableResize)) 
            {
              dialogsAdmi.objects[id].y2 += diffY;
              dialogsAdmi.objects[id].heightDialog += diffY;
              dialogsAdmi.setResizeDialog(id, dialogsAdmi.objects[id].widthDialog, dialogsAdmi.objects[id].heightDialog);
            }
          }
        }
      }
    }
    
    dialogsAdmi.objects[id].tableContainer.onmouseup = function(e)
    {
      dialogsAdmi.isClick = false;
      dialogsAdmi.objects[id].isClick = false;
      var wtc = dialogsAdmi.objects[id].tableContainer.rows[0].offsetWidth - 5;
      var wts = dialogsAdmi.objects[id].tableSts.style.offsetWidth;
      if (wtc < 0) 
      {
        wtc = 0;
      }
      dialogsAdmi.objects[id].tableSts.style.offsetWidth = wtc + 'px';
      dialogsAdmi.objects[id].tableContainer.style.offsetWidth = wtc + 'px';
      dialogsAdmi.objects[id].tableSts.rows[0].cells[2].style.cursor = "default";
    }
  },
  setResizeDialog: function(id, x2, y2)
  {
    if (this.objects[id].enableResize) 
    {
      dialogsAdmi.setWidth(id, x2);
      dialogsAdmi.setBodyHeight(id, y2);
    }
  },
  showGrid: function(id, sts)
  {
    if (sts) 
    {
      this.objects[id].tableBody.setAttribute("border", "1");
    }
    else 
    {
      this.objects[id].tableBody.setAttribute("border", "0");
    }
  },
  setImageDivModal : function(imageDivModal)
  {
    this.imgDivModal = imageDivModal;  
  },
  setPosition: function(id, x, y)
  {
    dialogsAdmi.objects[id].eventHideAllMenus();
    this.objects[id].tempX1 = this.objects[id].x1;
    this.objects[id].tempY1 = this.objects[id].y1;
    this.objects[id].x1 = x;
    this.objects[id].y1 = y;
    this.objects[id].style.position = "absolute";
    this.objects[id].style.left = this.objects[id].x1 + "px";
    this.objects[id].style.top = this.objects[id].y1 + "px";
    this.objects[id].x2 = this.objects[id].widthDialog + this.objects[id].x1;
    this.objects[id].y2 = this.objects[id].heightDialog + this.objects[id].y1;
    dialogsAdmi.sendToFrom(id);
  },
  getPositionPoint : function(id)
  {
  	var point = new Object();
  	point.x1 = dialogsAdmi.objects[id].x1;
  	point.y1 = dialogsAdmi.objects[id].y1;
  	point.x2 = dialogsAdmi.objects[id].x2;
  	point.y2 = dialogsAdmi.objects[id].y2;
  	return point;
  },
  setPriorPosition: function(id)
  {
    this.setPosition(id, this.objects[id].tempX1, this.objects[id].tempY1)
  },
  setAdjY: function(adj)
  {
    this.adjY = adj;
  },
  setCenterScreen: function(id)
  {
    var x = document.documentElement.clientWidth / 2 - this.objects[id].widthDialog / 2;
    var y = document.documentElement.clientHeight / 2 - this.objects[id].heightDialog / 2 - this.adjY;
    if (y < 5) {
      y = 5;
    }
    if( navigator.userAgent.match(/Android/i)
		|| navigator.userAgent.match(/webOS/i)
		|| navigator.userAgent.match(/iPhone/i)
		|| navigator.userAgent.match(/iPad/i)
		|| navigator.userAgent.match(/iPod/i)
		|| navigator.userAgent.match(/BlackBerry/i)
		|| navigator.userAgent.match(/Windows Phone/i)) {
    	this.setPosition(id, 34, y);
    }
	else {
    	this.setPosition(id, x, y);
	}
  },
  setFullScreen: function(id)
  {
    if (this.objects[id].enableFullScreen) 
    {
      this.objects[id].isMinScreen = false;
      this.objects[id].divBody.style.display = "block";
      var y = document.documentElement.clientHeight;
      this.setBodyHeight(id, y);
      this.show(id);
      this.setHeightBarSts(id, this.objects[id].heightBarSts);
      this.objects[id].tableSts.rows[0].cells[1].innerHTML = this.objects[id].stsMsg;
      this.objects[id].style.left = "0px";
      this.objects[id].style.top = "0px";
      this.objects[id].buttonMin.onclick = function()
      {
        dialogsAdmi.setPriorPosition(id);
        dialogsAdmi.maximize(id);
        dialogsAdmi.objects[id].isMaxScreen = false;
        dialogsAdmi.objects[id].onClickMinimizeDlg();
        dialogsAdmi.objects[id].minWindow.eventMinDlg();
      }
      this.objects[id].tableContainer.style.width = document.documentElement.clientWidth + "px";
      this.setWidth(id, document.documentElement.clientWidth);
      this.setTitle(id, this.objects[id].titleDialog);
      this.objects[id].x1 = 0;
      this.objects[id].y1 = 0;
      dialogsAdmi.sendToFrom(id);
      this.objects[id].buttonMin.innerHTML = '-';
    }
  },
  setEnableMinimize: function(id, sts)
  {
    this.objects[id].enableMinimize = sts;
    if (!sts) 
      this.objects[id].buttonMin.style.display = "none";
    else 
      this.objects[id].buttonMin.style.display = "block";
  },

  setEnableClose: function(id, sts)
  {
    if (!sts)
      this.objects[id].buttonClose.style.display = "none";
    else 
      this.objects[id].buttonClose.style.display = "block";
  },
  
  setEnableResize: function(id, sts)
  {
    this.objects[id].enableResize = sts;
  },
  setEnableFullScreen: function(id, sts)
  {
    this.objects[id].enableFullScreen = sts;
  },
  setMinimizeXY: function(id, x, y)
  {
    this.objects[id].minimizeX = x;
    this.objects[id].minimizeY = y;
  },
  sendToFrom: function(id)
  {
    dialogsAdmi.setFocus(id);
    var i = 0;
    var maxZIndex = parseInt(dialogsAdmi.objects[id].style.zIndex, 10);
    var maxId = id;
    var valZIndex = 0;
    var ident = id;
    var actZIndex = dialogsAdmi.objects[id].style.zIndex; 
	for (i = 0; i < this.ids.length; i++) 
    {	
      ident = dialogsAdmi.ids[i];
      if (!dialogsAdmi.objects[ident].staticOrder) 
	  {
		valZIndex = parseInt(dialogsAdmi.objects[ident].style.zIndex, 10);
		if ((valZIndex > maxZIndex)) 
		{
		  maxZIndex = valZIndex;
		  maxId = ident;
		  actZIndex = dialogsAdmi.objects[id].style.zIndex;
		  dialogsAdmi.objects[id].style.zIndex = maxZIndex;
		  dialogsAdmi.objects[maxId].style.zIndex = actZIndex;
		}
	  }
    }
  },
  
  setBlockModal: function(id)
  {
  	dialogsAdmi.objects[id].style.zIndex++;
    dialogsAdmi.objects[id].divModal.style.zIndex = dialogsAdmi.objects[id].style.zIndex - 1; 
    dialogsAdmi.objects[id].divModal.style.display = 'block';
    dialogsAdmi.objects[id].style.zIndex--;
  },
  remBlockModal: function(id)
  {
    dialogsAdmi.objects[id].divModal.style.zIndex = -1 * dialogsAdmi.objects[id].style.zIndex;
    dialogsAdmi.objects[id].divModal.style.display = 'none';
  },
  removeObjFromDialog: function(id, obj, row, col)
  {
  	this.objects[id].tableBody.rows[row].cells[col].removeChild(obj);
  },
  setMinWindowEvent: function(id, eClose, eMin, eShow)
  {
  	if(desktop.txtMinWin!=null && desktop.txtMinWin!=undefined && typeof eClose == 'string')
  	{
  	  dialogsAdmi.objects[id].txtMinWin 	= desktop.txtMinWin;	
  	  dialogsAdmi.objects[id].funcEnable 	= desktop.functEnable;
  	  dialogsAdmi.objects[id].functDisable 	= desktop.functDisable;
  	  dialogsAdmi.objects[id].functRemove 	= desktop.functRemove;
  	  dialogsAdmi.objects[id].eClose = eClose;
  	  dialogsAdmi.objects[id].eMin = eMin;
  	  dialogsAdmi.objects[id].eShow = eShow;
    }
    dialogsAdmi.objects[id].enableMinimize = false;
    if(typeof eClose=='object')
    {
    	dialogsAdmi.objects[id].minWindow.eventCloseDlg = eClose.hide;
        dialogsAdmi.objects[id].minWindow.eventMinDlg = eClose.disable;
        dialogsAdmi.objects[id].minWindow.eventShow = eClose.show;
    }
    else
    {
      dialogsAdmi.objects[id].minWindow.eventCloseDlg = new Function(eClose);
      dialogsAdmi.objects[id].minWindow.eventMinDlg = new Function(eMin);
      dialogsAdmi.objects[id].minWindow.eventShow = new Function(eShow);	
    }
    
  },
  show: function(id)
  {
  	this.objects[id].sts = this.STS_SHOW;
  	if(dialogsAdmi.objects[id].txtMinWin!=null && dialogsAdmi.objects[id].txtMinWin!=undefined)
  	{
  		var exist = false;
  		if(desktop!=null && desktop!=undefined)
  		{
  		  if(desktop.isDestroy)
  		  {	  
  			for(var i=0; i<dialogsAdmi.mwObj.length; i++)
  			{
  			  if(dialogsAdmi.mwObj[i].idMw == id)	
  			  {
  				var mw = desktop.getMinWin(dialogsAdmi.mwObj[i].size);  
  				if(mw==null || mw==undefined)
  				  mw = dialogsAdmi.mwObj[i] = desktop.addMinWindow(dialogsAdmi.objects[id].txtMinWin, dialogsAdmi.objects[id].funcEnable, dialogsAdmi.objects[id].functDisable, dialogsAdmi.objects[id].functRemove);	
  				dialogsAdmi.setMinWindowEvent(id, mw);
  				exist = true;
  				break;
  			  }
  			}
  			if(!exist)
  			{
  			  	
  			  for(var i=0; i<desktop.desk.tablaBar.rows[0].cells.length; i++)	
  			  {
  				var mw = desktop.desk.tablaBar.rows[0].cells[i].firstChild;  
  				if(mw!=null && mw!=undefined)
  				  if(mw.txt==dialogsAdmi.objects[id].txtMinWin)  
  			      {
  				    dialogsAdmi.setMinWindowEvent(id, mw); 
  				    exist = true;
  				    break;
  			      }
  			  }
  			  if(!exist)
			  {
				var p = dialogsAdmi.mwObj.length;	
				dialogsAdmi.mwObj[p] = new Object();
	  			dialogsAdmi.mwObj[p] = desktop.addMinWindow(dialogsAdmi.objects[id].txtMinWin, dialogsAdmi.objects[id].funcEnable, dialogsAdmi.objects[id].functDisable, dialogsAdmi.objects[id].functRemove)	
	  		    dialogsAdmi.mwObj[p].idMw = id;	
	  			dialogsAdmi.setMinWindowEvent(id, dialogsAdmi.mwObj[p]);
			  }
  			  
  			}
  		  }
  		}
  	}

  	if (dialogsAdmi.objects[id].loadBGImg)
  	  this.setBgBodyImg(id,dialogsAdmi.bgImgDlg);
    dialogsAdmi.objects[id].style.opacity = 1;
    dialogsAdmi.setFocus(id);
    dialogsAdmi.hideAllMenuForAllDlg();
    dialogsAdmi.sendToFrom(id);
    dialogsAdmi.objects[id].style.display = "block";
    dialogsAdmi.objects[id].onShowDialogF();
    dialogsAdmi.objects[id].minWindow.eventShow();
    if (this.objects[id].isModal) 
    {	
      this.setBlockModal(id);
    }
    this.showHideBodyElements(id,true);
  },
  showModal: function(id)
  {
    this.objects[id].isModal = true;
    this.show(id);
  },
  setStaticOrder: function(id, isStatic)
  {
    this.objects[id].staticOrder = isStatic;
  },
  setBodyHeight: function(id, height)
  {
    this.objects[id].tableContainer.rows[2].cells[0].style.height = height + "px";
    this.objects[id].divBody.style.height = height + "px";
  },
  setWidth: function(id, width)
  {
    this.objects[id].tableTitle.style.width = width + "px";
    this.objects[id].tableContainer.style.width = width + "px";
    this.objects[id].tableTitleIcon.rows[0].cells[0].style.width = "30px";
    this.objects[id].tableTitleIcon.rows[0].cells[1].style.width = (width-30-40) +  "px";
  },
  setTitle: function(id, title)
  {
    this.objects[id].tableTitleIcon.rows[0].cells[1].innerHTML = title;
  },
  setColorTitle: function(id, color)
  {
    //this.objects[id].tableTitleIcon.rows[0].cells[1].style.color = color;
  },
  setBorderStyleTitleBar: function(id, borderStyle)
  {
    //this.objects[id].tableContainer.rows[0].cells[0].style.borderStyle = borderStyle;
  },
  setBorderStyleStsBar: function(id, borderStyle)
  {
    //this.objects[id].tableContainer.rows[3].cells[0].style.borderStyle = borderStyle;
  },
  setBorderStyleBodyDialog: function(id, borderStyle)
  {
    //this.objects[id].tableContainer.rows[2].cells[0].style.borderStyle = borderStyle;
  },
  setWidthControlButtons: function(id, value)
  {
    this.objects[id].buttonClose.style.width = value + "px";
    this.objects[id].buttonMin.style.width = value + "px";
    this.objects[id].buttonHelp.style.width = value + "px";
  },
  setHeightControlButtons: function(id, value)
  {
  	this.objects[id].heightControlButtons = value;
    this.objects[id].buttonClose.style.height = value + "px";
    this.objects[id].buttonClose.style.lineHeight = value + "px";
    this.objects[id].buttonClose.vAlign = "middle";
    this.objects[id].buttonMin.style.height = value + "px";
    this.objects[id].buttonMin.style.lineHeight = value + "px";
    this.objects[id].buttonMin.vAlign = "middle";
    this.objects[id].buttonHelp.style.height = value + "px";
    this.objects[id].buttonHelp.style.lineHeight = value + "px";
    this.objects[id].buttonHelp.vAlign = "middle";    
  },
  setHeightBarTitle: function(id, value)
  {
    this.objects[id].tableContainer.rows[0].cells[0].style.height = value + "px";
  },
  setHeightBarSts: function(id, value)
  {
  	this.objects[id].heightBarSts = value;
    this.objects[id].tableContainer.rows[3].cells[0].style.height = value + "px";
  },
  setMsg: function(id, msg, sts)
  {
  	this.objects[id].tableSts.rows[0].cells[1].style.height = this.objects[id].heightBarSts+'px';
    this.objects[id].tableSts.rows[0].cells[1].style.lineHeight = this.objects[id].heightBarSts+'px';
    this.objects[id].tableSts.rows[0].cells[1].vAlign = 'middle';
    this.objects[id].tableSts.rows[0].cells[1].innerHTML = msg;
    this.objects[id].stsMsg = msg;
    if(this.objects[id].orgMsg==undefined)
      this.objects[id].orgMsg = msg;      
    if(sts && !dialogsAdmi.objects[id].isFx){    
      this.objects[id].isFx=true;
      var actColor = this.objects[id].tableContainer.rows[3].cells[0].style.color;
      var actSize = this.objects[id].tableContainer.rows[3].cells[0].style.fontSize.split('px')[0];
      var f = true;
      var cont = 0;
      function fx(){
        if(f){
          dialogsAdmi.objects[id].tableContainer.rows[3].cells[0].style.fontSize = actSize+'px';
          dialogsAdmi.objects[id].tableContainer.rows[3].cells[0].style.color = actColor;	
          dialogsAdmi.objects[id].tableContainer.rows[3].cells[0].style.color = 'yellow';
          dialogsAdmi.objects[id].tableContainer.rows[3].cells[0].style.fontSize = (parseInt(actSize,10)+3)+'px';
          f=false;
        }
        else{
          dialogsAdmi.objects[id].tableContainer.rows[3].cells[0].style.fontSize = actSize+'px';
          dialogsAdmi.objects[id].tableContainer.rows[3].cells[0].style.color = actColor;	
          dialogsAdmi.objects[id].tableContainer.rows[3].cells[0].style.color = 'green';
          dialogsAdmi.objects[id].tableContainer.rows[3].cells[0].style.fontSize = (parseInt(actSize,10)+3)+'px';
          f=true;
        }
        cont+=10;
        if(cont === 200){
          dialogsAdmi.objects[id].tableContainer.rows[3].cells[0].style.fontSize = actSize+'px';
          dialogsAdmi.objects[id].tableContainer.rows[3].cells[0].style.color = actColor;
          dialogsAdmi.objects[id].isFx=false;
          clearInterval(si);
        }
      }
      var si = setInterval(fx, 200);
      dialogsAdmi.objects[id].tableContainer.rows[3].cells[0].style.fontSize = actSize+'px';
      dialogsAdmi.objects[id].tableContainer.rows[3].cells[0].style.color = actColor;
    }  
  },
  setColorTextMsg: function(id, color)
  {
    this.objects[id].tableSts.rows[0].cells[1].style.color = color;
    this.objects[id].actColor = color;
  },
  setBgColorBarTitle: function(id, color)
  {
  /*
  	if (!this.objects[id].loadBGImg) 
    {
      this.objects[id].tableContainer.rows[0].cells[0].style.backgroundColor = color;
    }
    */
  },
  setBgColorBarSts: function(id, color)
  {
  /*
  	if (!this.objects[id].loadBGImg) 
    {
      this.objects[id].tableContainer.rows[3].cells[0].style.backgroundColor = color;
    }
    */
  },
  setBgColorBodyDialog: function(id, color)
  {
    /*
  	if (!this.objects[id].loadBGImg) 
    {
      this.objects[id].tableContainer.rows[2].cells[0].style.backgroundColor = color;
    } 
    */
  },
  setFontBarTitle: function(id, fontFamily, fontSize, fontColor)
  {
  /*
    this.objects[id].tableTitleIcon.rows[0].cells[1].style.color = fontColor;
    this.objects[id].tableTitleIcon.rows[0].cells[1].style.fontFamily = fontFamily;
    this.objects[id].tableTitleIcon.rows[0].cells[1].style.fontSize = fontSize + "px";
    */
  },
  setFontBarSts: function(id, fontFamily, fontSize, fontColor)
  {
  /*
    this.objects[id].tableContainer.rows[3].cells[0].style.color = fontColor;
    this.objects[id].tableContainer.rows[3].cells[0].style.fontFamily = fontFamily;
    this.objects[id].tableContainer.rows[3].cells[0].style.fontSize = fontSize + "px";
    */
  },
  setSpacing: function(id, spacing, padding)
  {
    this.objects[id].tableBody.setAttribute("cellPadding", spacing);
    this.objects[id].tableBody.setAttribute("cellSpacing", padding);
  },
  setLoadBGImg: function(id, activeLoad)
  {
    //this.objects[id].loadBGImg = activeLoad;
  },
  setLoadBGImgAll: function(activeLoad)
  {
  /*
    for (i = 0; i < this.ids.length; i++) 
    {
      this.setLoadBGImg(this.ids[i], activeLoad);
    }
    */
  },
  
  setTransparencyBgImg : function(transparencyImg)
  {
    this.transparecyBgImg = transparencyImg; 
    if(attrib)
      attrib.BgImg.transparecyBgImg[attrib.getActualEnv()] = transparencyImg;
  },
  
  
  
  setIconDlg : function(id, path, icon)
  {
  /*
    this.iconImg = path+icon;
    this.objects[id].divIcon.img.src = this.iconImg;  
    if(attrib)
    {
      attrib.BgImg.initButtonIcon[attrib.getActualEnv()]=icon;
      attrib.ACTUAL_ICON_DLG = icon;
    }
    */
  },
  setIconAllDlg : function(path, icon)
  {
  /*
    for(var i=0; i<this.ids.length; i++)
    {
      this.setIconDlg(this.ids[i], path, icon);
    }
    */
  },
  setObjAttrib: function(id, objAttrib, env)
  {
    if(env===undefined)
      env = attrib.getActualEnv();
    //this.objects[id].loadBGImg = objAttrib.getLoadBGImg();
    //this.setFontBarTitle(id, objAttrib.Font.head[env], objAttrib.Size.dialogTitle[env], objAttrib.Color.textDialogBarraTitle[env]);
    //this.setFontBarSts(id, objAttrib.Font.head[env], objAttrib.Size.dialogTitle[env], objAttrib.Color.textDialogBarraTitle[env]);
    //this.objects[id].heightBarSts = objAttrib.Size.titleBar[env];
    //this.setHeightBarSts(id, this.objects[id].heightBarSts);
    //this.objects[id].heightBarTitle = objAttrib.Size.titleBar[env];
    //this.setHeightBarTitle(id, this.objects[id].heightBarTitle);
    this.menuProperty.colorText = objAttrib.Color.textMenu[env];
    this.menuProperty.colorTextSelected = objAttrib.Color.textMenuSel[env];
    this.menuProperty.colorTextSubMenu = objAttrib.Color.textSubMenu[env];
    if (this.objects[id].loadBGImg) 
    {
      //this.setBgBarImg(id, objAttrib.BgImg.barTitle[env]);
      //this.setBgBodyImg(id, objAttrib.BgImg.bgPanel[env]);
	    this.bgImgDlg = objAttrib.BgImg.bgPanel[env];
	    this.transparecyBgImg = objAttrib.BgImg.transparecyBgImg[env];
	    this.menuProperty.imgBar = "url("+this.bgImgPath+objAttrib.BgImg.barMenuDlg[env]+")";
  	  if(dialogsAdmi.objects[id].tableContainer.rows[1].cells[0])
  	  {
  	  	dialogsAdmi.objects[id].tableContainer.rows[1].cells[0].style.backgroundImage = dialogsAdmi.menuProperty.imgBar;
  	  }  
  	  this.menuProperty.imgBarSelected = 'url(images/bg/'+objAttrib.BgImg.bgSelected[env]+')';
  	  this.menuProperty.imgPanel = 'url(images/bg/'+objAttrib.BgImg.bgPanelMenuDlg[env]+')';
  	  this.menuProperty.fontFamily = objAttrib.Font.menu[env];
  	  this.menuProperty.fontSize = objAttrib.Size.menu[env];
      
  	  var ct =0;
  	  for(ct=0; ct<this.objects[id].idsPanelMenu.length; ct++)
  	  {
    	  var smd = this.objects[id].idsPanelMenu[ct]; 
    		this.objects[id].submenu[smd].panel.style.backgroundImage = this.menuProperty.imgPanel;
    		dialogsAdmi.objects[id].tablaMenu.rows[0].cells[ct].style.color = dialogsAdmi.menuProperty.colorText;
    		for (i = 0; i < dialogsAdmi.objects[id].submenu[smd].captions.length; i++)
    		dialogsAdmi.objects[id].submenu[smd].panel.tablaPanel.rows[i].style.color = dialogsAdmi.menuProperty.colorTextSubMenu;
  	  }
	  }
    //this.botonCloseImgPath = objAttrib.BgImg.botonCloseImgPathDlg[env];
    //this.botonMinImgPath = objAttrib.BgImg.botonMinImgPathDlg[env];
    //this.botonMaxImgPath = objAttrib.BgImg.botonMaxImgPathDlg[env];
    //this.fontFamilyBottonControl = objAttrib.Font.fontFamilyBottonControlDlg[env];
    //this.fontColorBottonControl = objAttrib.Color.fontColorBottonControlDlg[env];
    //this.objects[id].buttonClose.style.color = this.fontColorBottonControl;
    //this.objects[id].buttonClose.style.fontFamily = this.fontFamilyBottonControl;
    //this.objects[id].buttonClose.style.backgroundImage = 'url(' +this.bgImgPath+this.botonCloseImgPath + ')';
    //this.objects[id].buttonMin.style.fontFamily = this.fontFamilyBottonControl;
    //this.objects[id].buttonMin.style.backgroundImage = 'url(' +this.bgImgPath + this.botonMinImgPath + ')';
    //this.objects[id].buttonMin.style.color = this.fontColorBottonControl;
    this.setHeightControlButtons(id, objAttrib.Size.heightControlButtonsDlg[env]);
    this.setWidthControlButtons(id, objAttrib.Size.widthControlButtonsDlg[env]);
    //this.iconImg = 'images/logo/'+objAttrib.BgImg.initButtonIcon[env];
    //this.objects[id].divIcon.img.src = this.iconImg;
    this.setImageDivModal(objAttrib.BgImg.imgDivModal[env]);
    this.objects[id].divModal.style.backgroundImage = 'url(images/bg/'+ this.imgDivModal +')';
    this.objects[id].divModal.style.backgroundRepeat = 'repeat';    
    this.objects[id].className = this.objects[id].nameComponent + 'Css'+attrib.getActualEnv();
    this.objects[id].buttonClose.className = 'dialogsAdmiButtonCloseCss'+attrib.getActualEnv();
    this.objects[id].buttonMin.className = 'dialogsAdmiButtonCloseCss'+attrib.getActualEnv();
    this.objects[id].tableTitleIcon.rows[0].cells[1].className = 'dialogsAdmiTitleCss'+attrib.getActualEnv();
    this.objects[id].tableSts.rows[0].cells[1].className = 'dialogsAdmiMessageCss'+attrib.getActualEnv();
  },
  setObjAttribToAll: function(objAttrib, env)
  {
  /*
    for (i = 0; i < this.ids.length; i++) 
    {
      this.setObjAttrib(this.ids[i], attrib, env);
    }
  */
  }
}

