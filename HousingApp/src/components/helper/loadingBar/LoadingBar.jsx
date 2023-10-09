
import React, { useState, useEffect, useRef } from 'react';
import "./loadingBar.css"

export default function LoadingBar({ isVisible }) {
    return (
        <div className={`honeycomb ${isVisible ? '' : 'd-none'}`}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
