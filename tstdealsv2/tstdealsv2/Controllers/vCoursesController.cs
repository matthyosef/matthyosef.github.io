using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using tstdealsv2.Models;
using Newtonsoft.Json;

namespace tstdealsv2.Controllers
{
    public class vCoursesController : Controller
    {
        tstdbvEntities tstdb = new tstdbvEntities();
        // GET: vCourses

        #region Courses
        public ActionResult All()
        {
            List<tstcours> tApp = tstdb.tstcourses.Where(x => x.OwnerId != 0).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return View();
        }

        public JsonResult GetCourses()
        {
            List<tstapplication> tApp = tstdb.tstapplications.Where(x => x.OwnerId != 0 && x.IsDeleted != true).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return Json(tApp, JsonRequestBehavior.AllowGet);
        }

        //[HttpGet]
        public JsonResult AddEditCourse(int? id)
        {
            return Json(tstdb.tstapplications.Where(x => x.Id == id), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult AddEditCourse(tstapplication app)
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
        public JsonResult DeleteCourse(int? id)
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

        #region AssignmentAnswers
        public ActionResult AssignmentsAnswers()
        {
            List<tstcourses_assignmentanswers> tApp = tstdb.tstcourses_assignmentanswers.Where(x => x.Id != 0).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return View();
        }

        public JsonResult GetAssignmentAnswers()
        {
            List<tstapplication> tApp = tstdb.tstapplications.Where(x => x.OwnerId != 0 && x.IsDeleted != true).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return Json(tApp, JsonRequestBehavior.AllowGet);
        }

        //[HttpGet]
        public JsonResult AddEditAssignmentAnswer(int? id)
        {
            return Json(tstdb.tstapplications.Where(x => x.Id == id), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult AddEditAssignmentAnswer(tstapplication app)
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
        public JsonResult DeleteAssignmentAnswer(int? id)
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

        #region Assignments
        public ActionResult Assignments()
        {
            List<tstcourses_assignments> tApp = tstdb.tstcourses_assignments.Where(x => x.OwnerId != 0).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return View();
        }

        public JsonResult GetAssignments()
        {
            List<tstapplication> tApp = tstdb.tstapplications.Where(x => x.OwnerId != 0 && x.IsDeleted != true).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return Json(tApp, JsonRequestBehavior.AllowGet);
        }

        //[HttpGet]
        public JsonResult AddEditAssignment(int? id)
        {
            return Json(tstdb.tstapplications.Where(x => x.Id == id), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult AddEditAssignment(tstapplication app)
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
        public JsonResult DeleteAssignment(int? id)
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

        #region AssignmentsQuestions
        public ActionResult AssignmentsQuestions()
        {
            List<tstcourses_assignmentsquestions> tApp = tstdb.tstcourses_assignmentsquestions.Where(x => x.OwnerId != 0).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return View();
        }

        public JsonResult GetAssignmentsQuestions()
        {
            List<tstapplication> tApp = tstdb.tstapplications.Where(x => x.OwnerId != 0 && x.IsDeleted != true).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return Json(tApp, JsonRequestBehavior.AllowGet);
        }

        //[HttpGet]
        public JsonResult AddEditAssignmentsQuestion(int? id)
        {
            return Json(tstdb.tstapplications.Where(x => x.Id == id), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult AddEditAssignmentsQuestion(tstapplication app)
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
        public JsonResult DeleteAssignmentsQuestion(int? id)
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
            List<tstcourses_collections> tApp = tstdb.tstcourses_collections.Where(x => x.OwnerId != 0).ToList();

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

        #region Enrollment
        public ActionResult Enrollment()
        {
            List<tstcourses_enrollment> tApp = tstdb.tstcourses_enrollment.Where(x => x.OwnerId != 0).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return View();
        }

        public JsonResult GetEnrollments()
        {
            List<tstapplication> tApp = tstdb.tstapplications.Where(x => x.OwnerId != 0 && x.IsDeleted != true).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return Json(tApp, JsonRequestBehavior.AllowGet);
        }

        //[HttpGet]
        public JsonResult AddEditEnrollment(int? id)
        {
            return Json(tstdb.tstapplications.Where(x => x.Id == id), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult AddEditEnrollment(tstapplication app)
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
        public JsonResult DeleteEnrollment(int? id)
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

        #region Gradebook
        public ActionResult Gradebook()
        {
            List<tstcourses_gradebook> tApp = tstdb.tstcourses_gradebook.Where(x => x.OwnerId != 0).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return View();
        }

        public JsonResult GetGradebooks()
        {
            List<tstapplication> tApp = tstdb.tstapplications.Where(x => x.OwnerId != 0 && x.IsDeleted != true).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return Json(tApp, JsonRequestBehavior.AllowGet);
        }

        //[HttpGet]
        public JsonResult AddEditGradebook(int? id)
        {
            return Json(tstdb.tstapplications.Where(x => x.Id == id), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult AddEditGradebook(tstapplication app)
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
        public JsonResult DeleteGradebook(int? id)
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

        #region Notes
        public ActionResult Notes()
        {
            List<tstcourses_notes> tApp = tstdb.tstcourses_notes.Where(x => x.OwnerId != 0).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return View();
        }

        public JsonResult GetNotes()
        {
            List<tstapplication> tApp = tstdb.tstapplications.Where(x => x.OwnerId != 0 && x.IsDeleted != true).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return Json(tApp, JsonRequestBehavior.AllowGet);
        }

        //[HttpGet]
        public JsonResult AddEditNotes(int? id)
        {
            return Json(tstdb.tstapplications.Where(x => x.Id == id), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult AddEditNotes(tstapplication app)
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
        public JsonResult DeleteNotes(int? id)
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
            List<tstcourses_searches> tApp = tstdb.tstcourses_searches.Where(x => x.OwnerId != 0).ToList();

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

        #region TestsResults
        public ActionResult TestsResults()
        {
            List<tstcourses_testresults> tApp = tstdb.tstcourses_testresults.Where(x => x.OwnerId != 0).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return View();
        }

        public JsonResult GetTestsResults()
        {
            List<tstapplication> tApp = tstdb.tstapplications.Where(x => x.OwnerId != 0 && x.IsDeleted != true).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return Json(tApp, JsonRequestBehavior.AllowGet);
        }

        //[HttpGet]
        public JsonResult AddEditTestsResult(int? id)
        {
            return Json(tstdb.tstapplications.Where(x => x.Id == id), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult AddEditTestsResult(tstapplication app)
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
        public JsonResult DeleteTestsResult(int? id)
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

        #region Tests
        public ActionResult Tests()
        {
            List<tstcourses_tests> tApp = tstdb.tstcourses_tests.Where(x => x.OwnerId != 0).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return View();
        }

        public JsonResult GetTests()
        {
            List<tstapplication> tApp = tstdb.tstapplications.Where(x => x.OwnerId != 0 && x.IsDeleted != true).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return Json(tApp, JsonRequestBehavior.AllowGet);
        }

        //[HttpGet]
        public JsonResult AddEditTest(int? id)
        {
            return Json(tstdb.tstapplications.Where(x => x.Id == id), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult AddEditTest(tstapplication app)
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
        public JsonResult DeleteTest(int? id)
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

        #region TestsQuestions
        public ActionResult TestsQuestions()
        {
            List<tstcourses_testsquestions> tApp = tstdb.tstcourses_testsquestions.Where(x => x.OwnerId != 0).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return View();
        }

        public JsonResult GetTestsQuestions()
        {
            List<tstapplication> tApp = tstdb.tstapplications.Where(x => x.OwnerId != 0 && x.IsDeleted != true).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return Json(tApp, JsonRequestBehavior.AllowGet);
        }

        //[HttpGet]
        public JsonResult AddEditTestsQuestion(int? id)
        {
            return Json(tstdb.tstapplications.Where(x => x.Id == id), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult AddEditTestsQuestion(tstapplication app)
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
        public JsonResult DeleteTestsQuestion(int? id)
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

        #region Tutors
        public ActionResult Tutors()
        {
            List<tstcourses_tutors> tApp = tstdb.tstcourses_tutors.Where(x => x.OwnerId != 0).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return View();
        }

        public JsonResult GetTutors()
        {
            List<tstapplication> tApp = tstdb.tstapplications.Where(x => x.OwnerId != 0 && x.IsDeleted != true).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return Json(tApp, JsonRequestBehavior.AllowGet);
        }

        //[HttpGet]
        public JsonResult AddEditTutor(int? id)
        {
            return Json(tstdb.tstapplications.Where(x => x.Id == id), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult AddEditTutor(tstapplication app)
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
        public JsonResult DeleteTutor(int? id)
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