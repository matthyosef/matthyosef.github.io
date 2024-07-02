$(document).ready(function (e) {
    GetMVM();
    ShowAddEditCanvas();
    ResetCanvas();
});

function ShowAddEditCanvas() {
    $(".add-new").click(function () {
        $("#offcanvasRecords").offcanvas("show");
    });
}

function ResetCanvas() {
    $("#offcanvasRecords").on("hidden.bs.offcanvas", function () {
        $(this).find("form").trigger("reset");
    });
    $("#modalDeleteRecord").on("hidden.bs.modal", function () {
        $(this).find("form").trigger("reset");
    });
}

function GetMVM() {
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
                    return `<div class="d-inline-block"><button onclick="DeleteConfirmation(${data})" class="btn btn-sm btn-icon item-delete"><i class="bx bx-trash"></i></button></div><button onclick="FetchMVM(${data})" class="btn btn-sm btn-icon item-edit"><i class="bx bxs-edit"></i></button>`;
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
            }
        ]
    }), $("div.head-label").html(
        '<h5 class="card-title mb-0">Table</h5>'
    ),
        $(".dataTables_filter .form-control").removeClass("form-control-sm"),
        $(".dataTables_length .form-select").removeClass("form-select-sm");
}

function FetchMVM(Id) {
    $.ajax({
        url: "/vApplications/AddEditApp/" + Id,
        datatype: "json",
        success: function (data) {
            $("#offcanvasRecordsHeader").html(`Edit Record`);
            $("#txtId").val(Id);
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

function SubmitMVM() {
    $.ajax({
        type: "POST",
        url: "/vApplications/AddEditApp",
        data: 
        {
            Id: $("#txtId").val(),
            ProductId: $("#txtProductId").val(),
            AppName: $("#txtAppName").val(),
            AppDescription: $("#txtAppDescription").val(),
            ReleasedDate: $("#txtReleasedDate").val()
        },
        success: function (msg) {
            $(".datatables-basic").DataTable().ajax.reload();
            $("#offcanvasRecords").offcanvas("hide");
            alert(msg);
        }
    })
}

function DeleteConfirmation(Id) {
    $("#ctlId").val(Id);
    $("#modalDeleteRecord").modal("show");
}

function DeleteMVM() {
    $.ajax({
        type: "POST",
        url: "/vApplications/DeleteApp",
        data:
        {
            Id: $("#ctlId").val(),
        },
        success: function (msg) {
            $(".datatables-basic").DataTable().ajax.reload();
            $("#modalDeleteRecord").modal("hide");
            alert(msg);
        }
    })
}