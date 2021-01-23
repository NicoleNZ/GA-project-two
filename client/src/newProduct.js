
const form = `
    <div class="row">
        <div class="col" id="side-col"></div>
        <div class="col-10" id="master-data-form">
            <h4>Create and Manage Your Products</h4>
            <form id="product-form">
                <div class="form-group">
                    <label for="product-id-label" id="product-id-label">Product ID</label>
                    <input type="text" class="form-control" id="product-id" placeholder="Enter Product ID" name="product-id">
                </div>
                <div class="form-group">
                    <label for="product-code" id="product-code-label">Product Code</label>
                    <input type="text" class="form-control" id="product-code" placeholder="E.g. FPC123" name="product-code">
                </div>
                <div class="form-group">
                    <label for="product-description" id="product-description-label">Product Description</label>
                    <input type="text" class="form-control" id="product-description" placeholder="E.g. Acme Vanilla Bean Flavoured Almonds" name="product-description">
                </div>
                <div class="form-group">
                    <label for="net-weight" id="net-weight-label">Net Weight</label>
                    <input type="text" class="form-control" id="net-weight" placeholder="E.g. 400g" name="net-weight">
                </div>
                <div class="form-group">
                    <label for="units-case" id="units-case-label">Units per Case</label>
                    <input type="text" class="form-control" id="units-case" placeholder="E.g. 20" name="units-case">
                </div>
                <div class="form-group">
                    <label for="list-price" id="list-price-label">List Price</label>
                    <input type="text" class="form-control" id="list-price" placeholder="E.g. $30.00" name="list-price">
                </div>
                <div class="form-group">
                    <label for="unit-barcode" id="unit-barcode-label">Unit Barcode</label>
                    <input type="text" class="form-control" id="unit-barcode" placeholder="E.g. 942112345678" name="unit-barcode">
                </div>
                <div class="form-group">
                    <label for="case-barcode" id="case-barcode-label">Case Barcode</label>
                    <input type="text" class="form-control" id="case-barcode" placeholder="E.g. 194212345678" name="case-barcode">
                </div>
                <fieldset class="form-group">
                    <legend class="col-form-label" id="active-product-label">Active Product?</legend>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" id="active-product-yes" name ="active-product" value="true">
                        <label class="form-check-label" for="active-product-yes" id="active-product-yes-label">Yes</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" id="active-product-no" name ="active-product" value="false">
                        <label class="form-check-label" for="active-product-no" id="active-product-no-label">No</label>
                    </div>
                </fieldset>
                <button type="button" id="create-product" class="btn btn-light">Create Product</button>
                <button type="button" id="update-product" class="btn btn-light">Update Product</button>
                <button type="button" id="delete-product" class="btn btn-danger">Delete Product</button>
            </form>
        </div>
        <div class="col" id="side-col"></div>
    </div>
`;

const newProduct = () => {
    $(document).on("click", "#create-product", async (e) => {
        e.preventDefault();
        console.log($("#product-code").val());
        console.log($("#product-description").val());
        console.log($("#net-weight").val());
        console.log($("#units-case").val());
        console.log($("#list-price").val());
        console.log($("#unit-barcode").val());
        console.log($("#case-barcode").val());
        console.log($(`input[name="active-product"]:checked`).val());

        const requestBody = {
            productCode: $("#product-code").val(),
            productName: $("#product-description").val(),
            netWeight: $("#net-weight").val(),
            unitsPerCase: $("#units-case").val(),
            listPrice: $("#list-price").val(),
            unitBarcode: $("#unit-barcode").val(),
            caseBarcode: $("#case-barcode").val(),
            activeProduct: $(`input[name="active-product"]:checked`).val()
        };

        const response = await $.ajax({
            type: "POST",
            url: "/api/vault/new-product",
            contentType: "application/json",
            data: JSON.stringify(requestBody),
        });
        console.log(response);
    });

    $(document).on("click", "#update-product", async (e) => {
        e.preventDefault();
        console.log($("#product-id").val());

        const requestBody = {
            productCode: $("#product-code").val(),
            productName: $("#product-description").val(),
            netWeight: $("#net-weight").val(),
            unitsPerCase: $("#units-case").val(),
            listPrice: $("#list-price").val(),
            unitBarcode: $("#unit-barcode").val(),
            caseBarcode: $("#case-barcode").val(),
            activeProduct: $(`input[name="active-product"]:checked`).val()
        };

        const response = await $.ajax({
            type: "PATCH",
            url: `/api/vault/update-product/${$("#product-id").val()}`,
            contentType: "application/json",
            data: JSON.stringify(requestBody),
        });
        console.log(response);
    });

    $(document).on("click", "#delete-product", async (e) => {
        e.preventDefault();
        console.log($("#product-id").val());

        const response = await $.ajax({
            type: "DELETE",
            url: `/api/vault/delete-product/${$("#product-id").val()}`,
            contentType: "application/json",
        });
        console.log(response);
    });

    return form;
};


export default newProduct;