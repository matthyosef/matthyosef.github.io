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


    public  partial class tstnew
    {
        public long Id { get; set; }
        [ScriptIgnore]
        public long OwnerId { get; set; }
        public long PictureId { get; set; }
        public string Title { get; set; }
        public string ShortTitle { get; set; }
        public string FullTitle { get; set; }
        public string MetaKeywords { get; set; }
        public string MetaTitle { get; set; }
        public long LanguageId { get; set; }
        public bool Published { get; set; }
        public Nullable<System.DateTime> StartDate { get; set; }
        public Nullable<System.DateTime> EndDate { get; set; }
        public Nullable<bool> AllowComments { get; set; }
        public Nullable<bool> LimitedToStores { get; set; }
        public string MetaDescription { get; set; }
        public Nullable<System.DateTime> CreatedOn { get; set; }
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