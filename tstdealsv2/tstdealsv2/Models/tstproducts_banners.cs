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


    public  partial class tstproducts_banners
    {
        public long Id { get; set; }
        [ScriptIgnore]
        public long OwnerId { get; set; }
        public string Title { get; set; }
        public string LinkURL { get; set; }
        public long CoverImageId { get; set; }
        public string HtmlText { get; set; }
        public Nullable<System.DateTime> StartDate { get; set; }
        public Nullable<System.DateTime> ExpiryDate { get; set; }
        public Nullable<long> Likes { get; set; }
        public Nullable<long> Views { get; set; }
        public Nullable<long> Shares { get; set; }
        [ScriptIgnore]
        public Nullable<bool> IsDeleted { get; set; }
        [ScriptIgnore]
        public Nullable<bool> IsActive { get; set; }
        [ScriptIgnore]
        public Nullable<System.DateTime> IsDeletedOn { get; set; }
        [ScriptIgnore]
        public Nullable<System.DateTime> IsActiveOn { get; set; }
    }
}