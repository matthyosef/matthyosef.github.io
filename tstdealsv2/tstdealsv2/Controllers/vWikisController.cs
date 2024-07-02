using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using tstdealsv2.Models;
using Newtonsoft.Json;

namespace tstdealsv2.Controllers
{
    public class vWikisController : Controller
    {
        tstdbvEntities tstdb = new tstdbvEntities();
        // GET: vWikis

        #region Wikis
        public ActionResult All()
        {
            List<tstwiki> tApp = tstdb.tstwikis.Where(x => x.OwnerId != 0).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return View();
        }

        public JsonResult GetWikis()
        {
            List<tstapplication> tApp = tstdb.tstapplications.Where(x => x.OwnerId != 0 && x.IsDeleted != true).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return Json(tApp, JsonRequestBehavior.AllowGet);
        }

        //[HttpGet]
        public JsonResult AddEditWiki(int? id)
        {
            return Json(tstdb.tstapplications.Where(x => x.Id == id), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult AddEditWiki(tstapplication app)
        {
            app.OwnerId = 100;
            if (ModelState.IsValid)
            {
                if (app.Id == 0)
                {
                    tstdb.tstapplications.Add(app);
                }
                else
                {
                    tstdb.Entry(app).State = System.Data.EntityState.Modified;
                }
                tstdb.SaveChanges();
                return Json("Details saved!", JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("Model validation failed!", JsonRequestBehavior.AllowGet);
            }
        }

        //[HttpPost]
        public JsonResult DeleteWiki(int? id)
        {
            //app.OwnerId = 100;
            var app = tstdb.tstapplications.SingleOrDefault(x => x.Id == id);
            if (app != null)
            {
                app.IsActive = false;
                app.IsDeleted = true;
                //app.IsDeletedOn = DateTime.UtcNow;
                tstdb.SaveChanges();
                return Json("Record deleted!", JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("Failed to delete record!", JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region Searches
        public ActionResult Searches()
        {
            List<tstwikis_searches> tApp = tstdb.tstwikis_searches.Where(x => x.OwnerId != 0).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return View();
        }

        public JsonResult GetSearches()
        {
            List<tstapplication> tApp = tstdb.tstapplications.Where(x => x.OwnerId != 0 && x.IsDeleted != true).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return Json(tApp, JsonRequestBehavior.AllowGet);
        }

        //[HttpGet]
        public JsonResult AddEditSearch(int? id)
        {
            return Json(tstdb.tstapplications.Where(x => x.Id == id), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult AddEditSearch(tstapplication app)
        {
            app.OwnerId = 100;
            if (ModelState.IsValid)
            {
                if (app.Id == 0)
                {
                    tstdb.tstapplications.Add(app);
                }
                else
                {
                    tstdb.Entry(app).State = System.Data.EntityState.Modified;
                }
                tstdb.SaveChanges();
                return Json("Details saved!", JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("Model validation failed!", JsonRequestBehavior.AllowGet);
            }
        }

        //[HttpPost]
        public JsonResult DeleteSearch(int? id)
        {
            //app.OwnerId = 100;
            var app = tstdb.tstapplications.SingleOrDefault(x => x.Id == id);
            if (app != null)
            {
                app.IsActive = false;
                app.IsDeleted = true;
                //app.IsDeletedOn = DateTime.UtcNow;
                tstdb.SaveChanges();
                return Json("Record deleted!", JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("Failed to delete record!", JsonRequestBehavior.AllowGet);
            }
        }
        #endregion
    }
}