$(document).ready(function (e) {
    GetAllApps();
    ShowAddEditCanvas();
});

function ShowAddEditCanvas() {
    $(".add-new").click(function () {
        //AddApp();
        $("#offcanvasRecords").offcanvas("show");
    })
}

function GetAllApps() {
    $(".datatables-basic").DataTable({
        ajax: {
            url: "/vApplications/GetAll",
            type: "GET",
            datatype: "json",
            dataSrc: ""
        },
        columns: [
            { data: "Id" },
            { data: "Id" },
            { data: "ProductId" },
            { data: "AppName" },
            { data: "AppDescription" },
            { data: "ReleasedDate" },
            { data: "Likes" },
            { data: "Views" },
            { data: "Shares" },
            { data: "Id" }
        ],
        language: { emptyTable: "No data found! Please click on the <b>Add New</b> button." },
        columnDefs: [
            {
                targets: 0,
                orderable: !1,
                searchable: !1,
                responsivePriority: 3,
                checkboxes: !0,
                checkboxes: {
                    selectAllRender:
                        '<input type="checkbox" class="form-check-input">'
                },
                render: function () {
                    return '<input type="checkbox" class="dt-checkboxes form-check-input">';
                }
            },
            { targets: 1, searchable: !1, visible: !1 },
            { targets: 2, searchable: !1, visible: !1 },
            {
                targets: -1,
                title: "Actions",
                orderable: !1,
                searchable: !1,
                render: function (data) {
                    return `<div class="d-inline-block"><a href="javascript:;" class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded"></i></a><ul class="dropdown-menu dropdown-menu-end m-0"><li><a href="javascript:;" class="dropdown-item">Details</a></li><li><a href="javascript:;" class="dropdown-item">Archive</a></li><div class="dropdown-divider"></div><li><a href="javascript:;" class="dropdown-item text-danger delete-record">Delete</a></li></ul></div><button onclick="FetchApp(${data})" class="btn btn-sm btn-icon item-edit"><i class="bx bxs-edit"></i></button>`;
                }
            },
            {
                defaultContent: "-",
                targets: "_all"
            }
        ],
        order: [[2, "desc"]],
        dom: '<"card-header flex-column flex-md-row"<"head-label text-center"><"dt-action-buttons text-end pt-3 pt-md-0"B>><"row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-end"f>>t<"row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
        buttons: [
            {
                extend: "collection",
                className: "btn btn-warning dropdown-toggle me-2",
                text: '<i class="bx bx-export me-sm-1"></i> <span class="d-none d-sm-inline-block">Export</span>',
                buttons: [
                    {
                        extend: "print",
                        text: '<i class="bx bx-printer me-1" ></i>Print',
                        className: "dropdown-item",
                        exportOptions: {
                            columns: [2, 3, 4, 5, 6, 7, 8]
                        },
                        customize: function (e) {
                            $(e.document.body)
                                .css("color", config.colors.headingColor)
                                .css("border-color", config.colors.borderColor)
                                .css("background-color", config.colors.bodyBg),
                                $(e.document.body)
                                    .find("table")
                                    .addClass("compact")
                                    .css("color", "inherit")
                                    .css("border-color", "inherit")
                                    .css("background-color", "inherit");
                        }
                    },
                    {
                        extend: "csv",
                        text: '<i class="bx bx-file me-1" ></i>Csv',
                        className: "dropdown-item",
                        exportOptions: {
                            columns: [2, 3, 4, 5, 6, 7, 8]
                        }
                    },
                    {
                        extend: "excel",
                        text: '<i class="bx bxs-file-export me-1"></i>Excel',
                        className: "dropdown-item",
                        exportOptions: {
                            columns: [2, 3, 4, 5, 6, 7, 8]
                        }
                    },
                    {
                        extend: "pdf",
                        text: '<i class="bx bxs-file-pdf me-1"></i>Pdf',
                        className: "dropdown-item",
                        exportOptions: {
                            columns: [2, 3, 4, 5, 6, 7, 8]
                        }
                    },
                    {
                        extend: "copy",
                        text: '<i class="bx bx-copy me-1" ></i>Copy',
                        className: "dropdown-item",
                        exportOptions: {
                            columns: [2, 3, 4, 5, 6, 7, 8]
                        }
                    }
                ]
            },
            {
                text: '<i class="bx bx-plus me-sm-1"></i> <span class="d-none d-sm-inline-block">Add New Record</span>',
                className: "add-new btn btn-primary me-2"
            },
            {
                text: '<i class="bx bx-trash me-sm-1"></i> <span class="d-none d-sm-inline-block">Delete</span>',
                className: "delete-rec btn btn-danger"
            }
        ]
    }), $("div.head-label").html(
        '<h5 class="card-title mb-0">Table</h5>'
    ),
        $(".dataTables_filter .form-control").removeClass("form-control-sm"),
        $(".dataTables_length .form-select").removeClass("form-select-sm");
}
/*
function AddApp() {
    $(".offcanvas-body").html(CreateApp());
    $("#offcanvasRecords").offcanvas("show");
}

function CreateApp(Id = 0, ProductId = 0, AppName = "", AppDescription = "", ReleasedDate = Date.UTC(2024,6,26,14,24,56,120), Likes = 0, Views = 0, Shares = 0) {
    const output = `
<form class="add-new-record pt-0 row g-2" id="formAddEdit" onsubmit="return false">
            <div class="col-sm-12">
                <label class="form-label">Associate Product</label>
                <div class="input-group input-group-merge">
                    <span class="input-group-text"><i class="bx bx-user"></i></span>
                    <input type="number" id="txtProductId" class="form-control" value="${ProductId}"/>
                </div>
            </div>
            <div class="col-sm-12">
                <label class="form-label">Application Name</label>
                <div class="input-group input-group-merge">
                    <span class="input-group-text"><i class='bx bxs-briefcase'></i></span>
                    <input type="text" id="txtAppName"  class="form-control" value="${AppName}"/>
                </div>
            </div>
            <div class="col-sm-12">
                <label class="form-label">Application Description</label>
                <div class="input-group input-group-merge">
                    <span class="input-group-text"><i class="bx bx-envelope"></i></span>
                    <textarea id="txtAppDescription" rows="12" class="form-control">${AppDescription}</textarea>
                </div>
            </div>
<div class="col-sm-12">
                <label class="form-label">Date Released</label>
                <div class="input-group input-group-merge">
                    <span class="input-group-text"><i class='bx bxs-briefcase'></i></span>
                    <input type="date" id="txtReleasedDate" class="form-control" value="${ReleasedDate}"/>
                </div>
<div class="col-sm-12">
                <label class="form-label">Likes</label>
                <div class="input-group input-group-merge">
                    <span class="input-group-text"><i class='bx bxs-briefcase'></i></span>
                    <input type="number" id="txtLikes"  class="form-control" readonly value="${Likes}"/>
                </div>
<div class="col-sm-12">
                <label class="form-label">Views</label>
                <div class="input-group input-group-merge">
                    <span class="input-group-text"><i class='bx bxs-briefcase'></i></span>
                    <input type="number" id="txtViews"  class="form-control" readonly value="${Views}"/>
<div class="col-sm-12">
                <label class="form-label">Shares</label>
                <div class="input-group input-group-merge">
                    <span class="input-group-text"><i class='bx bxs-briefcase'></i></span>
                    <input type="number" id="txtShares"  class="form-control" readonly value="${Shares}"/>
                </div>
            </div>
                </div>
            </div>
            </div>
            </div>
            <div class="col-sm-12">
                <button type="submit" class="btn btn-primary data-submit me-sm-3 me-1" onclick="SubmitApp();">Submit</button>
                <button type="reset" class="btn btn-outline-secondary" data-bs-dismiss="offcanvas">Cancel</button>
            </div>
</form>
`;
    return output;
}
*/
function FetchApp(Id) {
    $.ajax({
        url: "/vApplications/AddEditApp/" + Id,
        datatype: "json",
        success: function (data) {
            $("#offcanvasRecordsHeader").html(`Edit Record`);
            $("#txtId").val(data[0].Id);
            $("#txtProductId").val(data[0].ProductId);
            $("#txtAppName").val(data[0].AppName);
            $("#txtAppDescription").val(data[0].AppDescription);
            $("#txtReleasedDate").val(data[0].ReleasedDate);
            $("#txtLikes").val(data[0].Likes);
            $("#txtViews").val(data[0].Views);
            $("#txtShares").val(data[0].Shares);
            $("#offcanvasRecords").offcanvas("show");
        }
    });
}

/*
function FetchApp(Id) {
    $.ajax({
        url: "/vApplications/AddEditApp/" + Id,
        datatype: "json",
        success: function (data) {
            $("#offcanvasRecordsHeader").html(`Edit Record`);
            $(".offcanvas-body").html(CreateApp(
                data.map(item => item.Id),
                data.map(item => item.ProductId),
                data.map(item => item.AppName),
                data.map(item => item.AppDescription),
                data.map(item => item.ReleasedDate),
                data.map(item => item.Likes),
                data.map(item => item.Views),
                data.map(item => item.Shares)
            ));
            $("#offcanvasRecords").offcanvas("show");
        }
    });
}
*/
function SubmitApp() {
    alert($("#txtProductId").val());
    $.ajax({
        type: "POST",
        url: "/vApplications/AddEditApp",
        contentType: "application/json;charset=utf-8",
        datatype: "json",
        data: `
        {
            ProductId: ${$("#txtProductId").val()},
            AppName: ${$("#txtAppName").val()},
            AppDescription: ${$("#txtAppDescription").val()},
            ReleasedDate: ${$("#txtReleasedDate").val()}
        }`,
        success: function (msg) {
            $(".datatables-basic").DataTable().ajax.reload();
            $("#offcanvasRecords").offcanvas("hide");
            alert(msg);
        }
    })
}

function DeleteConfirmation(Id) {
    let output = `
<div class="text-center">
<h3 class="text-danger mb-4">Are you sure you want to remove this item?</h3>
            <div class="col-sm-12">
<input type="hidden" id="ctlAction" value="Delete"/>
<input type="hidden" id="ctlId" value="${Id}"/>
                <button type="submit" class="btn btn-primary data-submit me-sm-3 me-1" onclick="DeleteApp(${Id});">Submit</button>
                <button type="reset" class="btn btn-outline-secondary" data-bs-dismiss="offcanvas">Cancel</button>
            </div>
`;
    $("#offcanvasRecordsHeader").html(`Delete Item Confirmation`);
    $(".offcanvas-body").html(output);
    $("#offcanvasRecords").offcanvas("show");
}

function DeleteApp(Id) {
    $.ajax({
        type: "POST",
        url: "/vApplications/DeleteApp/" + Id,
        success: function (msg) {
            $(".datatables-basic").DataTable().ajax.reload();
            $("#offcanvasRecords").offcanvas("hide");
            alert(msg);
        }
    })
}