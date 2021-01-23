
const form = `
<div class="container">
        <div class="row">
            <div class="col" id="side-col"></div>
            <div class="col-10" id="master-data-form">
                <form id="product-form">
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
                    <button type="submit" class="btn btn-primary">Create Product</button>
                </form>
            </div>
            <div class="col" id="side-col"></div>
        </div>
    </div>
`;

const newProduct = () => {
    $(document).on("submit", "#product-form", async (e) => {
        e.preventDefault();
        console.log($("#").val());
    });
};