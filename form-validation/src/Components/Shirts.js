import React, { Component } from 'react';

class Shirts extends Component {

    constructor() {
        super();
        this.state = {
            value: true
        }

        this.handleThemeColor = this.handleThemeColor.bind(this);
    }

    handleThemeColor(e) {
        const colorSelect = document.querySelector('#color');
        const colorChildren = colorSelect.children;

        this.setState({
            value: false
        });

        if (e.target.value === 'js puns') {
            colorChildren[0].style.display = 'none';
            colorChildren[4].style.display = 'none';
            colorChildren[5].style.display = 'none';
            colorChildren[6].style.display = 'none';
        } else if (e.target.value === 'heart js') {
            colorChildren[0].style.display = 'none';
            colorChildren[1].style.display = 'none';
            colorChildren[2].style.display = 'none';
            colorChildren[3].style.display = 'none';
        }
    }

    render() {
        return (
            <fieldset className='shirts'>
                <legend>T-Shirt Info</legend>
                <div className='shirt-div-box'>
                    <div id='shirt-sizes' className='shirt-sizes'>
                        <label for='size'>Size: </label>
                        <select id='size' name='user-size'>
                            <option value='small'>S</option>
                            <option value='medium' selected>M</option>
                            <option value='large'>L</option>
                            <option value='extra large'>XL</option>
                            <option value='extra large'>XXL</option>
                        </select>
                    </div>

                    <div id='shirt-designs' class='shirt designs'>
                        <label for='design'>Design:</label>
                        <select id='design' name='user-design' onChange={this.handleThemeColor}>
                            <option hidden>Select Theme</option>
                            <option value='js puns'>Theme - JS Puns</option>
                            <option value='heart js'>Theme - I &#9829; JS</option>
                        </select>
                    </div>

                    <div id='shirt-colors' className='shirt-colors'>
                        <label for='color' className='color-label'>Color:</label>
                        <select id='color' disabled={this.state.value}>
                            <option selected hidden>Select a design theme above</option>
                            <option data-theme="js puns" value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>
                            <option data-theme="js puns" value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option>
                            <option data-theme="js puns" value="gold">Gold (JS Puns shirt only)</option>
                            <option data-theme="heart js" value="tomato">Tomato (I &#9829; JS shirt only)</option>
                            <option data-theme="heart js" value="steelblue">Steel Blue (I &#9829; JS shirt only)</option>
                            <option data-theme="heart js" value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option>
                        </select>
                    </div>
                </div>
            </fieldset>
        );
    }
}

export default Shirts;