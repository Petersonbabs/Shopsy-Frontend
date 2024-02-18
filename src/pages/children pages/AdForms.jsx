export const FirstPage = () => {
    return (
        <div>
            <div className="form sell-form">
                <select name="category" id="category">
                    <option value="">Select a category</option>
                    <option value="electronic">Electronics</option>
                    <option value="fashion">Fashion</option>
                    <option value="phones">Phones & Tablet</option>
                </select>

                <select name="location" id="location">
                    <option value="">Select a location</option>
                    <option value="lagos">Lagos</option>
                    <option value="ibadan">Ibadan</option>
                    <option value="abuja">Abuja</option>
                </select>

                <div className="sell-product-pic">
                    <p>Add photo</p>
                    <b>Add at least 1 photo for this category</b>
                    <input type="file" id="add-image" />
                </div>

            </div>
        </div>
    )
}


export const SecondPage = () => {
    return (
        <div>
            <div className="form sell-form">
                <input type="text" placeholder="Title*" />
                <input type="text" placeholder="Quantity*" />
                <input type="text" placeholder="Description*" />
                <input type="number" placeholder="Price*" />
                <div className="negotiable">
                    <input type="checkbox" name="" id="negotiable" />
                    <label htmlFor="negotiable">Negotiable</label>
                </div>

                <div>
                    <input type="number" id="seller-phone" placeholder="Your Number"/>
                    <input type="text" placeholder="Peter Babs" disabled/>
                </div>
            </div>
        </div>
    )
}


