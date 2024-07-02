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


    public  partial class tstmusic_tracks
    {
        public long Id { get; set; }
        [ScriptIgnore]
        public long OwnerId { get; set; }
        public Nullable<long> AlbumId { get; set; }
        public long AudioId { get; set; }
        public long PublisherId { get; set; }
        public string ArtistName { get; set; }
        public string TrackTitle { get; set; }
        public string Genre { get; set; }
        public Nullable<System.TimeSpan> PlayTime { get; set; }
        public string Lyrics { get; set; }
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