using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using tstdealsv2.Models;
using Newtonsoft.Json;

namespace tstdealsv2.Controllers
{
    public class vEbooksController : Controller
    {
        tstdbvEntities tstdb = new tstdbvEntities();
        // GET: vEbooks

        #region Ebooks
        public ActionResult All()
        {
            List<tstebook> tApp = tstdb.tstebooks.Where(x => x.OwnerId != 0).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return View();
        }

        public JsonResult GetEbooks()
        {
            List<tstapplication> tApp = tstdb.tstapplications.Where(x => x.OwnerId != 0 && x.IsDeleted != true).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return Json(tApp, JsonRequestBehavior.AllowGet);
        }

        //[HttpGet]
        public JsonResult AddEditEbook(int? id)
        {
            return Json(tstdb.tstapplications.Where(x => x.Id == id), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult AddEditEbook(tstapplication app)
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
        public JsonResult DeleteEbook(int? id)
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

        #region Authors
        public ActionResult Authors()
        {
            List<tstebooks_authors> tApp = tstdb.tstebooks_authors.Where(x => x.OwnerId != 0).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return View();
        }

        public JsonResult GetAuthors()
        {
            List<tstapplication> tApp = tstdb.tstapplications.Where(x => x.OwnerId != 0 && x.IsDeleted != true).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return Json(tApp, JsonRequestBehavior.AllowGet);
        }

        //[HttpGet]
        public JsonResult AddEditAuthor(int? id)
        {
            return Json(tstdb.tstapplications.Where(x => x.Id == id), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult AddEditAuthor(tstapplication app)
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
        public JsonResult DeleteAuthor(int? id)
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

        #region Collections
        public ActionResult Collections()
        {
            List<tstebooks_collections> tApp = tstdb.tstebooks_collections.Where(x => x.OwnerId != 0).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return View();
        }

        public JsonResult GetCollections()
        {
            List<tstapplication> tApp = tstdb.tstapplications.Where(x => x.OwnerId != 0 && x.IsDeleted != true).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return Json(tApp, JsonRequestBehavior.AllowGet);
        }

        //[HttpGet]
        public JsonResult AddEditCollection(int? id)
        {
            return Json(tstdb.tstapplications.Where(x => x.Id == id), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult AddEditCollection(tstapplication app)
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
        public JsonResult DeleteCollection(int? id)
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

        #region Publishers
        public ActionResult Publishers()
        {
            List<tstebooks_publishers> tApp = tstdb.tstebooks_publishers.Where(x => x.OwnerId != 0).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return View();
        }

        public JsonResult GetPublishers()
        {
            List<tstapplication> tApp = tstdb.tstapplications.Where(x => x.OwnerId != 0 && x.IsDeleted != true).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return Json(tApp, JsonRequestBehavior.AllowGet);
        }

        //[HttpGet]
        public JsonResult AddEditPublisher(int? id)
        {
            return Json(tstdb.tstapplications.Where(x => x.Id == id), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult AddEditPublisher(tstapplication app)
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
        public JsonResult DeletePublisher(int? id)
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
            List<tstebooks_searches> tApp = tstdb.tstebooks_searches.Where(x => x.OwnerId != 0).ToList();

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