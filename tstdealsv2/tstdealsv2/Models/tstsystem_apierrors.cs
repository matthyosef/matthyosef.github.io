//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace tstdealsv2.Models
{
    using System;
    using System.Collections.Generic;
    using Newtonsoft.Json;
    using System.Web.Script.Serialization;


    public  partial class tstsystem_apierrors
    {
        public long Id { get; set; }
        [ScriptIgnore]
        public long OwnerId { get; set; }
        public string Message { get; set; }
        public Nullable<System.DateTime> CreatedOn { get; set; }
    }
}