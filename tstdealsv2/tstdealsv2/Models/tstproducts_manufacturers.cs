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


    public  partial class tstproducts_manufacturers
    {
        public long Id { get; set; }
        [ScriptIgnore]
        public long OwnerId { get; set; }
        public string ManufacturerName { get; set; }
        public string MetaKeywords { get; set; }
        public string MetaTitle { get; set; }
        public string Description { get; set; }
        public string MetaDescription { get; set; }
        public long PictureId { get; set; }
        public Nullable<System.DateTime> CreatedOn { get; set; }
        public Nullable<System.DateTime> UpdatedOn { get; set; }
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