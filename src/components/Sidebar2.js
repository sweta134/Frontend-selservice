import React from 'react'
import {FaHome} from "react-icons/fa";
import {FaCoins} from "react-icons/fa";
import {HiAcademicCap} from "react-icons/hi";
import {FaQuestionCircle} from "react-icons/fa";
import {FaUserAlt} from "react-icons/fa";
import {BiSearchAlt} from "react-icons/bi";
export default function Sidebar2() {
    return (
        <div className="page-sidebar navbar-collapse collapse snav">
            {/* BEGIN SIDEBAR MENU */}
            {/* DOC: Apply "page-sidebar-menu-light" class right after "page-sidebar-menu" to enable light sidebar menu style(without borders) */}
            {/* DOC: Apply "page-sidebar-menu-hover-submenu" class right after "page-sidebar-menu" to enable hoverable(hover vs accordion) sub menu mode */}
            {/* DOC: Apply "page-sidebar-menu-closed" class right after "page-sidebar-menu" to collapse("page-sidebar-closed" class must be applied to the body element) the sidebar sub menu mode */}
            {/* DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing */}
            {/* DOC: Set data-keep-expand="true" to keep the submenues expanded */}
            {/* DOC: Set data-auto-speed="200" to adjust the sub menu slide up/down speed */}
            <ul className="page-sidebar-menu  page-header-fixed " data-keep-expanded="false" data-auto-scroll="true" data-slide-speed={200} style={{ paddingTop: '20px' }}>
                {/* DOC: To remove the sidebar toggler from the sidebar you just need to completely remove the below "sidebar-toggler-wrapper" LI element */}
                {/* BEGIN SIDEBAR TOGGLER BUTTON */}
                <li className="sidebar-toggler-wrapper hide">
                    <div className="sidebar-toggler">
                        <span />
                    </div>
                </li>
                {/* END SIDEBAR TOGGLER BUTTON */}
                {/* DOC: To remove the search box from the sidebar you just need to completely remove the below "sidebar-search-wrapper" LI element */}
                <li className="sidebar-search-wrapper">
                    {/* BEGIN RESPONSIVE QUICK SEARCH FORM */}
                    {/* DOC: Apply "sidebar-search-bordered" class the below search form to have bordered search box */}
                    {/* DOC: Apply "sidebar-search-bordered sidebar-search-solid" class the below search form to have bordered & solid search box */}
                    <form className="sidebar-search  " action="page_general_search_3.html" method="POST">
                        <a href="javascript:;" className="remove">
                            <i className="icon-close" />
                        </a>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search..." />
                            <span className="input-group-btn">
                                <a href="javascript:;" className="btn submit">
                                    <BiSearchAlt />
                                </a>
                            </span>
                        </div>
                    </form>
                    {/* END RESPONSIVE QUICK SEARCH FORM */}
                </li>
                <li className="nav-item start active open">
                    <a href="javascript:;" className="nav-link nav-toggle">
                        <FaHome />
                        <span className="title">Home</span>
                        <span className="selected" />
                        <span className="arrow open" />
                    </a>
                    
                </li>
                
                <li className="nav-item  ">
                    <a href="javascript:;" className="nav-link nav-toggle">
                        <FaCoins />
                        <span className="title">Fees</span>
                        <span className="arrow" />
                    </a>
                    <ul className="sub-menu">
                        <li className="nav-item  ">
                            <a href="ui_colors.html" className="nav-link ">
                                <span className="title">Color Library</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="ui_metronic_grid.html" className="nav-link ">
                                <span className="title">Metronic Grid System</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="ui_general.html" className="nav-link ">
                                <span className="title">General Components</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="ui_buttons.html" className="nav-link ">
                                <span className="title">Buttons</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="ui_buttons_spinner.html" className="nav-link ">
                                <span className="title">Spinner Buttons</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="ui_confirmations.html" className="nav-link ">
                                <span className="title">Popover Confirmations</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="ui_sweetalert.html" className="nav-link ">
                                <span className="title">Bootstrap Sweet Alerts</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="ui_icons.html" className="nav-link ">
                                <span className="title">Font Icons</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="ui_socicons.html" className="nav-link ">
                                <span className="title">Social Icons</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="ui_typography.html" className="nav-link ">
                                <span className="title">Typography</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="ui_tabs_accordions_navs.html" className="nav-link ">
                                <span className="title">Tabs, Accordions &amp; Navs</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="ui_timeline.html" className="nav-link ">
                                <span className="title">Timeline 1</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="ui_timeline_2.html" className="nav-link ">
                                <span className="title">Timeline 2</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="ui_timeline_horizontal.html" className="nav-link ">
                                <span className="title">Horizontal Timeline</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="ui_tree.html" className="nav-link ">
                                <span className="title">Tree View</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="javascript:;" className="nav-link nav-toggle">
                                <span className="title">Page Progress Bar</span>
                                <span className="arrow" />
                            </a>
                            <ul className="sub-menu">
                                <li className="nav-item ">
                                    <a href="ui_page_progress_style_1.html" className="nav-link "> Flash </a>
                                </li>
                                <li className="nav-item ">
                                    <a href="ui_page_progress_style_2.html" className="nav-link "> Big Counter </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item  ">
                            <a href="ui_blockui.html" className="nav-link ">
                                <span className="title">Block UI</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="ui_bootstrap_growl.html" className="nav-link ">
                                <span className="title">Bootstrap Growl Notifications</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="ui_notific8.html" className="nav-link ">
                                <span className="title">Notific8 Notifications</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="ui_toastr.html" className="nav-link ">
                                <span className="title">Toastr Notifications</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="ui_bootbox.html" className="nav-link ">
                                <span className="title">Bootbox Dialogs</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="ui_alerts_api.html" className="nav-link ">
                                <span className="title">Metronic Alerts API</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="ui_session_timeout.html" className="nav-link ">
                                <span className="title">Session Timeout</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="ui_idle_timeout.html" className="nav-link ">
                                <span className="title">User Idle Timeout</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="ui_modals.html" className="nav-link ">
                                <span className="title">Modals</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="ui_extended_modals.html" className="nav-link ">
                                <span className="title">Extended Modals</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="ui_tiles.html" className="nav-link ">
                                <span className="title">Tiles</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="ui_datepaginator.html" className="nav-link ">
                                <span className="title">Date Paginator</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="ui_nestable.html" className="nav-link ">
                                <span className="title">Nestable List</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="nav-item  ">
                    <a href="javascript:;" className="nav-link nav-toggle">
                        <HiAcademicCap />
                        <span className="title">Academics</span>
                        <span className="arrow" />
                    </a>
                    <ul className="sub-menu">
                        <li className="nav-item  ">
                            <a href="components_date_time_pickers.html" className="nav-link ">
                                <span className="title">Date &amp; Time Pickers</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="components_color_pickers.html" className="nav-link ">
                                <span className="title">Color Pickers</span>
                                <span className="badge badge-danger">2</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="components_select2.html" className="nav-link ">
                                <span className="title">Select2 Dropdowns</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="components_bootstrap_multiselect_dropdown.html" className="nav-link ">
                                <span className="title">Bootstrap Multiselect Dropdowns</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="components_bootstrap_select.html" className="nav-link ">
                                <span className="title">Bootstrap Select</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="components_multi_select.html" className="nav-link ">
                                <span className="title">Bootstrap Multiple Select</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="components_bootstrap_select_splitter.html" className="nav-link ">
                                <span className="title">Select Splitter</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="components_clipboard.html" className="nav-link ">
                                <span className="title">Clipboard</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="components_typeahead.html" className="nav-link ">
                                <span className="title">Typeahead Autocomplete</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="components_bootstrap_tagsinput.html" className="nav-link ">
                                <span className="title">Bootstrap Tagsinput</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="components_bootstrap_switch.html" className="nav-link ">
                                <span className="title">Bootstrap Switch</span>
                                <span className="badge badge-success">6</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="components_bootstrap_maxlength.html" className="nav-link ">
                                <span className="title">Bootstrap Maxlength</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="components_bootstrap_fileinput.html" className="nav-link ">
                                <span className="title">Bootstrap File Input</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="components_bootstrap_touchspin.html" className="nav-link ">
                                <span className="title">Bootstrap Touchspin</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="components_form_tools.html" className="nav-link ">
                                <span className="title">Form Widgets &amp; Tools</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="components_context_menu.html" className="nav-link ">
                                <span className="title">Context Menu</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="components_editors.html" className="nav-link ">
                                <span className="title">Markdown &amp; WYSIWYG Editors</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="components_code_editors.html" className="nav-link ">
                                <span className="title">Code Editors</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="components_ion_sliders.html" className="nav-link ">
                                <span className="title">Ion Range Sliders</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="components_noui_sliders.html" className="nav-link ">
                                <span className="title">NoUI Range Sliders</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="components_knob_dials.html" className="nav-link ">
                                <span className="title">Knob Circle Dials</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="nav-item  ">
                    <a href="javascript:;" className="nav-link nav-toggle">
                        <FaQuestionCircle />
                        <span className="title">FAQ's</span>
                        <span className="arrow" />
                    </a>
                    <ul className="sub-menu">
                        <li className="nav-item  ">
                            <a href="form_controls.html" className="nav-link ">
                                <span className="title">Bootstrap Form
                                    <br />Controls</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="form_controls_md.html" className="nav-link ">
                                <span className="title">Material Design
                                    <br />Form Controls</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="form_validation.html" className="nav-link ">
                                <span className="title">Form Validation</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="form_validation_states_md.html" className="nav-link ">
                                <span className="title">Material Design
                                    <br />Form Validation States</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="form_validation_md.html" className="nav-link ">
                                <span className="title">Material Design
                                    <br />Form Validation</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="form_layouts.html" className="nav-link ">
                                <span className="title">Form Layouts</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="form_repeater.html" className="nav-link ">
                                <span className="title">Form Repeater</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="form_input_mask.html" className="nav-link ">
                                <span className="title">Form Input Mask</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="form_editable.html" className="nav-link ">
                                <span className="title">Form X-editable</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="form_wizard.html" className="nav-link ">
                                <span className="title">Form Wizard</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="form_icheck.html" className="nav-link ">
                                <span className="title">iCheck Controls</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="form_image_crop.html" className="nav-link ">
                                <span className="title">Image Cropping</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="form_fileupload.html" className="nav-link ">
                                <span className="title">Multiple File Upload</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="form_dropzone.html" className="nav-link ">
                                <span className="title">Dropzone File Upload</span>
                            </a>
                        </li>
                    </ul>
                </li>
                
               
                
               
                <li className="nav-item  ">
                    <a href="javascript:;" className="nav-link nav-toggle">
                        <FaUserAlt />
                        <span className="title">Profile</span>
                        <span className="arrow" />
                    </a>
                    <ul className="sub-menu">
                        <li className="nav-item  ">
                            <a href="maps_google.html" className="nav-link ">
                                <span className="title">Google Maps</span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="maps_vector.html" className="nav-link ">
                                <span className="title">Vector Maps</span>
                            </a>
                        </li>
                    </ul>
                </li>
                
            </ul>
            {/* END SIDEBAR MENU */}
            {/* END SIDEBAR MENU */}
        </div>

    )
}
