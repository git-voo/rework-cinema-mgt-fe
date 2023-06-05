import React from 'react'

export default function UserPersInfo() {
    return (
        <div>
            <b className=' fw-6'>Personal Information</b>
            <div className="checkboxs">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                    <label class="form-check-label" for="flexCheckChecked">
                        Personal Information
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                        Billing Information
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                        Registration Information
                    </label>
                </div>


            </div>
            <form class="row g-3">

                <div class="col-md-12 col-lg-12">
                    <label for="inputEmail4" class="form-label">Address 1</label>
                    <input type="text" class="form-control p-2 fs-5" placeholder="1234 Main St" />
                </div>

                <div class="col-md-12 col-lg-12">
                    <label for="inputPassword4" class="form-label">Address 2</label>
                    <input type="text" class="form-control p-2 fs-5" placeholder="1234 Main St" />
                </div>

                <div class="col-md-6">
                    <label for="inputCity" class="form-label">City</label>
                    <input type="text" class="form-control p-2 fs-5" placeholder="Oklahoma" />
                </div>

                <div class="col-md-6">
                    <label for="inputState" class="form-label ">Country</label>
                    <select id="inputState" class="form-select p-2 fs-5">
                        <option selected>Choose...</option>
                        <option>Nigeria</option>
                        <option>Ghana</option>
                        <option>Uganda</option>
                        <option>Togo</option>
                        <option>Ivory Coast</option>
                        <option>S/Africa</option>
                        <option>Cameroun</option>
                    </select>
                </div>

                <div class="col-md-6">
                    <label for="inputAddress" class="form-label">Address</label>
                    <input type="text" class="form-control p-2 fs-5" id="inputAddress" placeholder="1234 Main St" />
                </div>



                <div class="col-md-6">
                    <label for="inputZip" class="form-label">Zip</label>
                    <input type="text" class="form-control p-2 fs-5" id="inputZip" />
                </div>
                <div class="col-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck" />
                        <label class="form-check-label" for="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>
                <center class="col-12">
                    <button type="submit" class="btn btn-primary w-25 mb-2">Log out</button>
                </center>
            </form>
        </div>
    )
}
