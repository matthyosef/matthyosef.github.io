using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using tstdealsv2.Models;
using Newtonsoft.Json;

namespace tstdealsv2.Controllers
{
    public class cCampaignsController : Controller
    {
        tstdbvEntities tstdb = new tstdbvEntities();
        // GET: cCampaigns
        public ActionResult Index()
        {
            List<tstcampaign> tApp = tstdb.tstcampaigns.Where(x => x.OwnerId != 0).ToList();

            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);

            return Json(tApp, JsonRequestBehavior.AllowGet);
        }
    }
}