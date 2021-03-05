/*
 * Copyright 2021 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Free Software license Agreement ("Agreement")
 * carefully.
 *
 * This Agreement is a legally binding contract between
 * the Licensee (as defined below) and SpinalCom that
 * sets forth the terms and conditions that govern your
 * use of the Program. By installing and/or using the
 * Program, you agree to abide by all the terms and
 * conditions stated or referenced herein.
 *
 * If you do not agree to abide by these terms and
 * conditions, do not demonstrate your acceptance and do
 * not install or use the Program.
 * You should have received a copy of the license along
 * with this file. If not, see
 * <http://resources.spinalcom.com/licenses.pdf>.
 */

/*
 * Copyright 2021 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Free Software license Agreement ("Agreement")
 * carefully.
 *
 * This Agreement is a legally binding contract between
 * the Licensee (as defined below) and SpinalCom that
 * sets forth the terms and conditions that govern your
 * use of the Program. By installing and/or using the
 * Program, you agree to abide by all the terms and
 * conditions stated or referenced herein.
 *
 * If you do not agree to abide by these terms and
 * conditions, do not demonstrate your acceptance and do
 * not install or use the Program.
 * You should have received a copy of the license along
 * with this file. If not, see
 * <http://resources.spinalcom.com/licenses.pdf>.
 */

const { SpinalDrive_App } = require("spinal-env-drive-core");


/**
 * SpinalDrive_App_FileExplorer_inspector
 * @extends {SpinalDrive_App}
 */
class SpinalDrive_App_Api_admin extends SpinalDrive_App {

  /**
   * Creates an instance of SpinalDrive_App_Graph_inspector.
   * @memberof SpinalDrive_App_Api_admin
   */
  constructor() {
    super("ST_APIADMIN", "ST Api Admin", 3000, "person",
      "ST_APIADMIN");
  }
  /**
   * method to handle the selection
   * 
   * @param {any} element 
   * @memberof SpinalDrive_App_Api_admin
   */
  action(obj) {
    // const node = FileSystem._objects[obj.file._server_id];
    // node._ptr.load((x) => {
    let myWindow = window.open('', '');
    let location = "/html/api-admin";
    myWindow.document.location = location;
    myWindow.focus();
    // })
  }

  /**
   * method to know if the app is needed to be shown.
   * @param {Object} d node of the tree selectionned
   * @returns {boolean}
   * @memberof SpinalDrive_App_Api_admin
   */
  is_shown() {
    return Promise.resolve(true);
  }
}
// const spinalDrive_Env = new SpinalDrive_Env()
window.spinalDrive_Env.add_applications('FileExplorer', new SpinalDrive_App_Api_admin());

