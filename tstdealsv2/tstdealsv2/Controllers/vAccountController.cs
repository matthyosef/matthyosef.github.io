using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using tstdealsv2.Models;
using Newtonsoft.Json;

namespace tstdealsv2.Controllers
{
    public class vAccountController : Controller
    {
        tstdbvEntities tstdb = new tstdbvEntities();
        // GET: vAccount
        public ActionResult Index()
        {
            List<tstaccount> tApp = tstdb.tstaccounts.Where(x => x.Id != 0).ToList();
            
            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);
            
            return Json(tApp,JsonRequestBehavior.AllowGet);
        }
    }
}