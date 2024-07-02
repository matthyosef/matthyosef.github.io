using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using tstdealsv2.Models;
using Newtonsoft.Json;

namespace tstdealsv2.Controllers
{
    public class vArtworksController : Controller
    {
        tstdbvEntities tstdb = new tstdbvEntities();
        // GET: vArtworks

        #region Artworks
        public ActionResult All()
        {
            List<tstartwork> tApp = tstdb.tstartworks.Where(x => x.OwnerId != 0).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return View();
        }

        public JsonResult GetAll()
        {
            List<tstapplication> tApp = tstdb.tstapplications.Where(x => x.OwnerId != 0 && x.IsDeleted != true).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return Json(tApp, JsonRequestBehavior.AllowGet);
        }

        //[HttpGet]
        public JsonResult AddEditArtwork(int? id)
        {
            return Json(tstdb.tstapplications.Where(x => x.Id == id), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult AddEditArtwork(tstapplication app)
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
        public JsonResult DeleteArtwork(int? id)
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

        #region Artists
        public ActionResult Artists()
        {
            List<tstartworks_artists> tApp = tstdb.tstartworks_artists.Where(x => x.OwnerId != 0).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return View();
        }

        public JsonResult GetArtist()
        {
            List<tstapplication> tApp = tstdb.tstapplications.Where(x => x.OwnerId != 0 && x.IsDeleted != true).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return Json(tApp, JsonRequestBehavior.AllowGet);
        }

        //[HttpGet]
        public JsonResult AddEditArtist(int? id)
        {
            return Json(tstdb.tstapplications.Where(x => x.Id == id), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult AddEditArtist(tstapplication app)
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
        public JsonResult DeleteArtist(int? id)
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
            List<tstartworks_collections> tApp = tstdb.tstartworks_collections.Where(x => x.OwnerId != 0).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return View();
        }

        public JsonResult GetCollection()
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
            List<tstartworks_publishers> tApp = tstdb.tstartworks_publishers.Where(x => x.OwnerId != 0).ToList();

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
            List<tstartworks_searches> tApp = tstdb.tstartworks_searches.Where(x => x.OwnerId != 0).ToList();

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