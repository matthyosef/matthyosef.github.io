﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using tstdealsv2.Models;
using Newtonsoft.Json;

namespace tstdealsv2.Controllers
{
    public class vSettingsController : Controller
    {
        tstdbvEntities tstdb = new tstdbvEntities();
        // GET: vSettings
        public ActionResult Index()
        {
            List<tstaccount_settings> tApp = tstdb.tstaccount_settings.Where(x => x.OwnerId != 0).ToList();
            
            //only use this if fields set to JsonIgnore from Newtonsoft.JSON package
            //var data = JsonConvert.SerializeObject(tApp, Formatting.None);
            
            return Json(tApp,JsonRequestBehavior.AllowGet);
        }
    }
}