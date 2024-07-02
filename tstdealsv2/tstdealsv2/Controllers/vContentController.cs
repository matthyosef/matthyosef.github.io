using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using tstdealsv2.Models;
using Newtonsoft.Json;

namespace tstdealsv2.Controllers
{
    public class vContentController : Controller
    {
        tstdbvEntities tstdb = new tstdbvEntities();
        // GET: vContent

        #region Posts
        public ActionResult Posts()
        {
            List<tstblog_post> tApp = tstdb.tstblog_post.Where(x => x.OwnerId != 0).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return View();
        }

        public JsonResult GetPosts()
        {
            List<tstapplication> tApp = tstdb.tstapplications.Where(x => x.OwnerId != 0 && x.IsDeleted != true).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return Json(tApp, JsonRequestBehavior.AllowGet);
        }

        //[HttpGet]
        public JsonResult AddEditPost(int? id)
        {
            return Json(tstdb.tstapplications.Where(x => x.Id == id), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult AddEditPost(tstapplication app)
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
        public JsonResult DeletePost(int? id)
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

        #region Comments
        public ActionResult Comments()
        {
            List<tstblog_comments> tApp = tstdb.tstblog_comments.Where(x => x.Id != 0).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return View();
        }

        public JsonResult GetComments()
        {
            List<tstapplication> tApp = tstdb.tstapplications.Where(x => x.OwnerId != 0 && x.IsDeleted != true).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return Json(tApp, JsonRequestBehavior.AllowGet);
        }

        //[HttpGet]
        public JsonResult AddEditComment(int? id)
        {
            return Json(tstdb.tstapplications.Where(x => x.Id == id), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult AddEditComment(tstapplication app)
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
        public JsonResult DeleteComment(int? id)
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

        #region Links
        public ActionResult Links()
        {
            List<tstblog_links> tApp = tstdb.tstblog_links.Where(x => x.OwnerId != 0).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return View();
        }

        public JsonResult GetLinks()
        {
            List<tstapplication> tApp = tstdb.tstapplications.Where(x => x.OwnerId != 0 && x.IsDeleted != true).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return Json(tApp, JsonRequestBehavior.AllowGet);
        }

        //[HttpGet]
        public JsonResult AddEditLink(int? id)
        {
            return Json(tstdb.tstapplications.Where(x => x.Id == id), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult AddEditLink(tstapplication app)
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
        public JsonResult DeleteLink(int? id)
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

        #region Photos
        public ActionResult Photos()
        {
            List<tstblog_photos> tApp = tstdb.tstblog_photos.Where(x => x.OwnerId != 0).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return View();
        }

        public JsonResult GetPhotos()
        {
            List<tstapplication> tApp = tstdb.tstapplications.Where(x => x.OwnerId != 0 && x.IsDeleted != true).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return Json(tApp, JsonRequestBehavior.AllowGet);
        }

        //[HttpGet]
        public JsonResult AddEditPhoto(int? id)
        {
            return Json(tstdb.tstapplications.Where(x => x.Id == id), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult AddEditPhoto(tstapplication app)
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
        public JsonResult DeletePhoto(int? id)
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
            List<tstblog_searches> tApp = tstdb.tstblog_searches.Where(x => x.OwnerId != 0).ToList();

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

        #region Videos
        public ActionResult Videos()
        {
            List<tstblog_videos> tApp = tstdb.tstblog_videos.Where(x => x.OwnerId != 0).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return View();
        }

        public JsonResult GetVideos()
        {
            List<tstapplication> tApp = tstdb.tstapplications.Where(x => x.OwnerId != 0 && x.IsDeleted != true).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return Json(tApp, JsonRequestBehavior.AllowGet);
        }

        //[HttpGet]
        public JsonResult AddEditVideo(int? id)
        {
            return Json(tstdb.tstapplications.Where(x => x.Id == id), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult AddEditVideo(tstapplication app)
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
        public JsonResult DeleteVideo(int? id)
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

        #region ZuckStories
        public ActionResult ZuckStories()
        {
            List<tstzuckstory> tApp = tstdb.tstzuckstories.Where(x => x.OwnerId != 0).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return View();
        }

        public JsonResult GetZuckStories()
        {
            List<tstapplication> tApp = tstdb.tstapplications.Where(x => x.OwnerId != 0 && x.IsDeleted != true).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return Json(tApp, JsonRequestBehavior.AllowGet);
        }

        //[HttpGet]
        public JsonResult AddEditZuckStory(int? id)
        {
            return Json(tstdb.tstapplications.Where(x => x.Id == id), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult AddEditZuckStory(tstapplication app)
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
        public JsonResult DeleteZuckStory(int? id)
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