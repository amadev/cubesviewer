angular.module('cv').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('dialog/dialog.html',
    "  <div class=\"modal-header\">\n" +
    "    <button type=\"button\" ng-click=\"close()\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\"><i class=\"fa fa-fw fa-close\"></i></span></button>\n" +
    "    <h4 class=\"modal-title\" id=\"myModalLabel\"><i class=\"fa fa-fw fa-exclamation\"></i> CubesViewer</h4>\n" +
    "  </div>\n" +
    "  <div class=\"modal-body\">\n" +
    "        <p>{{ dialog.text }}</p>\n" +
    "  </div>\n" +
    "  <div class=\"modal-footer\">\n" +
    "    <!-- <button type=\"button\" ng-click=\"close()\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>  -->\n" +
    "    <button type=\"button\" ng-click=\"close()\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\n" +
    "  </div>\n" +
    "\n"
  );


  $templateCache.put('studio/about.html',
    "<div class=\"modal fade\" id=\"cvAboutModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"\">\n" +
    "  <div class=\"modal-dialog\" role=\"document\">\n" +
    "    <div class=\"modal-content\">\n" +
    "      <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\"><i class=\"fa fa-fw fa-close\"></i></span></button>\n" +
    "        <h4 class=\"modal-title\" id=\"myModalLabel\"><i class=\"cv-logo-embedded\"></i> CubesViewer</h4>\n" +
    "      </div>\n" +
    "      <div class=\"modal-body\">\n" +
    "\n" +
    "            <p><a href=\"http://jjmontesl.github.io/cubesviewer/\" target=\"_blank\">CubesViewer</a> is a visual, web-based application for exploring and analyzing\n" +
    "            OLAP databases served by the <a href=\"http://cubes.databrewery.org/\" target=\"_blank\">Cubes OLAP Framework</a>.</p>\n" +
    "            <hr />\n" +
    "\n" +
    "            <p>Version {{ cvVersion }}<br />\n" +
    "            <a href=\"https://github.com/jjmontesl/cubesviewer/\" target=\"_blank\">https://github.com/jjmontesl/cubesviewer/</a></p>\n" +
    "\n" +
    "            <p>by José Juan Montes and others (see AUTHORS)<br />\n" +
    "            2012 - 2016</p>\n" +
    "\n" +
    "            <p>\n" +
    "            <a href=\"http://github.com/jjmontesl/cubesviewer/blob/master/LICENSE.txt\" target=\"_blank\">LICENSE</a>\n" +
    "            </p>\n" +
    "\n" +
    "      </div>\n" +
    "      <div class=\"modal-footer\">\n" +
    "        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\"><i class=\"fa fa-cube\"></i> Close</button>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "\n"
  );


  $templateCache.put('studio/panel.html',
    "<div class=\"cv-bootstrap cv-gui-viewcontainer\" ng-controller=\"CubesViewerStudioViewController\">\n" +
    "\n" +
    "    <div class=\"panel panel-primary\">\n" +
    "        <div ng-if=\"! cvOptions.hideControls\" class=\"panel-heading\">\n" +
    "\n" +
    "            <button type=\"button\" ng-click=\"studioViewsService.closeView(view)\" class=\"btn btn-danger btn-xs pull-right hidden-print\" style=\"margin-left: 10px;\"><i class=\"fa fa-fw fa-close\"></i></button>\n" +
    "            <button type=\"button\" ng-click=\"studioViewsService.toggleCollapseView(view)\" class=\"btn btn-primary btn-xs pull-right hidden-print\" style=\"margin-left: 5px;\"><i class=\"fa fa-fw\" ng-class=\"{'fa-caret-up': !view.collapsed, 'fa-caret-down': view.collapsed }\"></i></button>\n" +
    "\n" +
    "            <i class=\"fa fa-fw fa-file\"></i> <span class=\"cv-gui-title\" style=\"cursor: pointer;\" ng-dblclick=\"studioViewsService.studioScope.showRenameView(view)\"><a name=\"cvView{{ view.id }}\"></a>{{ view.params.name }}</span>\n" +
    "\n" +
    "            <span ng-if=\"view.savedId > 0 && reststoreService.isViewChanged(view)\" class=\"badge cv-gui-container-state\" style=\"margin-left: 15px; font-size: 80%;\">Modified</span>\n" +
    "            <span ng-if=\"view.savedId > 0 && !reststoreService.isViewChanged(view)\" class=\"badge cv-gui-container-state\" style=\"margin-left: 15px; font-size: 80%;\">Saved</span>\n" +
    "            <span ng-if=\"view.shared\" class=\"badge cv-gui-container-state\" style=\"margin-left: 5px; font-size: 80%;\">Shared</span>\n" +
    "\n" +
    "            <button type=\"button\" class=\"btn btn-danger btn-xs\" style=\"visibility: hidden;\"><i class=\"fa fa-fw fa-info\"></i></button>\n" +
    "\n" +
    "        </div>\n" +
    "        <div class=\"panel-body\" ng-hide=\"view.collapsed\">\n" +
    "            <div class=\"cv-gui-viewcontent\">\n" +
    "\n" +
    "                <div cv-view-cube view=\"view\"></div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('studio/rename.html',
    "  <div class=\"modal-header\">\n" +
    "    <button type=\"button\" ng-click=\"close();\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\"><i class=\"fa fa-fw fa-close\"></i></span></button>\n" +
    "    <h4 class=\"modal-title\" id=\"myModalLabel\"><i class=\"fa fa-pencil\"></i> Rename view</h4>\n" +
    "  </div>\n" +
    "  <div class=\"modal-body\">\n" +
    "\n" +
    "        <form class=\"form\" ng-submit=\"renameView(viewName);\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"serializedView\">Name:</label>\n" +
    "                <input class=\"form-control\" ng-model=\"viewName\" />\n" +
    "            </div>\n" +
    "        </form>\n" +
    "\n" +
    "  </div>\n" +
    "  <div class=\"modal-footer\">\n" +
    "    <button type=\"button\" ng-click=\"close();\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n" +
    "    <button type=\"button\" ng-click=\"renameView(viewName);\" class=\"btn btn-primary\" data-dismiss=\"modal\">Rename</button>\n" +
    "  </div>\n" +
    "\n"
  );


  $templateCache.put('studio/serialize-add.html',
    "  <div class=\"modal-header\">\n" +
    "    <button type=\"button\" ng-click=\"close()\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\"><i class=\"fa fa-fw fa-close\"></i></span></button>\n" +
    "    <h4 class=\"modal-title\" id=\"myModalLabel\"><i class=\"fa fa-code\"></i> Add view from serialized JSON</h4>\n" +
    "  </div>\n" +
    "  <div class=\"modal-body\">\n" +
    "\n" +
    "        <div class=\"form\">\n" +
    "            <label for=\"serializedView\">Code:</label>\n" +
    "            <textarea class=\"form-control\" ng-model=\"serializedView\" style=\"width: 100%; height: 12em;\" />\n" +
    "        </div>\n" +
    "\n" +
    "  </div>\n" +
    "  <div class=\"modal-footer\">\n" +
    "    <button type=\"button\" ng-click=\"close()\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n" +
    "    <button type=\"button\" ng-click=\"addSerializedView(serializedView)\" class=\"btn btn-primary\" data-dismiss=\"modal\">Add View</button>\n" +
    "  </div>\n" +
    "\n"
  );


  $templateCache.put('studio/serialize-view.html',
    "  <div class=\"modal-header\">\n" +
    "    <button type=\"button\" ng-click=\"close()\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\"><i class=\"fa fa-fw fa-close\"></i></span></button>\n" +
    "    <h4 class=\"modal-title\" id=\"myModalLabel\"><i class=\"fa fa-code\"></i> Serialized View</h4>\n" +
    "  </div>\n" +
    "  <div class=\"modal-body\">\n" +
    "\n" +
    "        <div class=\"form\">\n" +
    "            <label for=\"serializedView\">View definition JSON:</label>\n" +
    "            <textarea class=\"form-control cv-serialized-view\" ng-bind=\"serializedView\" style=\"width: 100%; height: 12em;\" readonly></textarea>\n" +
    "        </div>\n" +
    "\n" +
    "  </div>\n" +
    "  <div class=\"modal-footer\">\n" +
    "    <button type=\"button\" ng-click=\"close()\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n" +
    "  </div>\n" +
    "\n"
  );


  $templateCache.put('studio/serverinfo.html',
    "<div class=\"modal fade\" id=\"cvServerInfo\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"\">\n" +
    "  <div class=\"modal-dialog\" role=\"document\">\n" +
    "    <div class=\"modal-content\">\n" +
    "      <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\"><i class=\"fa fa-fw fa-close\"></i></span></button>\n" +
    "        <h4 class=\"modal-title\" id=\"myModalLabel\"><i class=\"fa fa-fw fa-database\"></i> Server info</h4>\n" +
    "      </div>\n" +
    "      <div class=\"modal-body\">\n" +
    "\n" +
    "            <p>\n" +
    "                <i>This CubesViewer version supports Cubes Server version 1.0.x and 1.1.x</i><br />\n" +
    "                <br />\n" +
    "                <b>Server version:</b> {{ cubesService.cubesserver.server_version }} <br />\n" +
    "                <b>Cubes version:</b> {{ cubesService.cubesserver.cubes_version }} <br />\n" +
    "                <b>API version:</b> {{ cubesService.cubesserver.api_version }} <br />\n" +
    "            </p>\n" +
    "            <p>\n" +
    "                <b>Timezone:</b> {{ cubesService.cubesserver.info.timezone }} <br />\n" +
    "                <b>Week start:</b> {{ cubesService.cubesserver.info.first_weekday }} <br />\n" +
    "            </p>\n" +
    "            <p>\n" +
    "                <b>Result limit:</b> <strong class=\"text-warning\">{{ cubesService.cubesserver.info.json_record_limit }}</strong> items<br />\n" +
    "            </p>\n" +
    "\n" +
    "      </div>\n" +
    "      <div class=\"modal-footer\">\n" +
    "        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\"> Close</button>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "\n"
  );


  $templateCache.put('studio/studio.html',
    "<div class=\"cv-bootstrap\" ng-controller=\"CubesViewerStudioController\">\n" +
    "\n" +
    "    <div class=\"cv-gui-panel hidden-print\">\n" +
    "\n" +
    "        <div class=\"dropdown m-b\" style=\"display: inline-block;\">\n" +
    "          <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" data-submenu>\n" +
    "            <i class=\"fa fa-fw fa-cube\"></i> Кубы <span class=\"caret\"></span>\n" +
    "          </button>\n" +
    "\n" +
    "          <ul class=\"dropdown-menu cv-gui-cubeslist-menu\">\n" +
    "\n" +
    "            <li ng-show=\"cubesService.state === 1\" class=\"disabled\"><a>Загрузка...</a></li>\n" +
    "            <li ng-show=\"cubesService.state === 2 && cubesService.cubesserver._cube_list.length === 0\" class=\"disabled\"><a>Кубы не найдены</a></li>\n" +
    "            <li ng-show=\"cubesService.state === 3\" class=\"disabled text-danger\"><a>Ошибка загрузки</a></li>\n" +
    "\n" +
    "            <li ng-repeat=\"cube in cubesService.cubesserver._cube_list | orderBy:'label'\" ng-click=\"studioViewsService.addViewCube(cube.name)\"><a>{{ cube.label }}</a></li>\n" +
    "\n" +
    "          </ul>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "        <div ng-if=\"cvOptions.backendUrl\" class=\"dropdown m-b\" style=\"display: inline-block; \">\n" +
    "          <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" data-submenu>\n" +
    "            <i class=\"fa fa-fw fa-file\"></i> Сохраненные представления<span class=\"caret\"></span>\n" +
    "          </button>\n" +
    "\n" +
    "          <ul class=\"dropdown-menu cv-gui-catalog-menu\">\n" +
    "\n" +
    "            <li class=\"dropdown-header\">Персональные представления</li>\n" +
    "\n" +
    "            <!-- <li ng-show=\"true\" class=\"disabled\"><a>Loading...</a></li>  -->\n" +
    "            <li ng-repeat=\"sv in reststoreService.savedViews | orderBy:'sv.name'\" ng-if=\"sv.owner == cvOptions.user\" ng-click=\"reststoreService.addSavedView(sv.id)\"><a style=\"max-width: 360px; overflow-x: hidden; text-overflow: ellipsis; white-space: nowrap;\"><i class=\"fa fa-fw\"></i> {{ sv.name }}</a></li>\n" +
    "\n" +
    "            <li class=\"dropdown-header\">Предоставлено другими</li>\n" +
    "\n" +
    "            <!-- <li ng-show=\"true\" class=\"disabled\"><a>Loading...</a></li>  -->\n" +
    "            <li ng-repeat=\"sv in reststoreService.savedViews | orderBy:'sv.name'\" ng-if=\"sv.shared && sv.owner != cvOptions.user\" ng-click=\"reststoreService.addSavedView(sv.id)\"><a style=\"max-width: 360px; overflow-x: hidden; text-overflow: ellipsis; white-space: nowrap;\"><i class=\"fa fa-fw\"></i> {{ sv.name }}</a></li>\n" +
    "\n" +
    "          </ul>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "        <div class=\"dropdown m-b\" style=\"display: inline-block; margin-left: 5px;\">\n" +
    "          <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" data-submenu>\n" +
    "            <i class=\"fa fa-fw fa-wrench\"></i> Инструменты <span class=\"caret\"></span>\n" +
    "          </button>\n" +
    "\n" +
    "          <ul class=\"dropdown-menu\">\n" +
    "\n" +
    "                <li ng-click=\"showSerializeAdd()\"><a tabindex=\"0\"><i class=\"fa fa-fw fa-code\"></i> Добавить представление из JSON...</a></li>\n" +
    "\n" +
    "                <div class=\"divider\"></div>\n" +
    "\n" +
    "                <li ng-click=\"toggleTwoColumn()\" ng-class=\"{ 'hidden-xs': ! cvOptions.studioTwoColumn, 'disabled': studioViewsService.views.length == 0 }\"><a tabindex=\"0\"><i class=\"fa fa-fw fa-columns\"></i> 2 столбца\n" +
    "                    <span class=\"label label-default\" style=\"margin-left: 10px;\" ng-class=\"{ 'label-success': cvOptions.studioTwoColumn }\">{{ cvOptions.studioTwoColumn ? \"ON\" : \"OFF\" }}</span></a>\n" +
    "                </li>\n" +
    "                <li ng-click=\"toggleHideControls()\" ng-class=\"{ 'disabled': studioViewsService.views.length == 0 }\"><a tabindex=\"0\"><i class=\"fa fa-fw fa-unlock-alt\"></i> Скрыть\n" +
    "                    <span class=\"label label-default\" style=\"margin-left: 10px;\" ng-class=\"{ 'label-success': cvOptions.hideControls }\">{{ cvOptions.hideControls ? \"ON\" : \"OFF\" }}</span></a>\n" +
    "                </li>\n" +
    "\n" +
    "                <div class=\"divider\"></div>\n" +
    "\n" +
    "\n" +
    "                <!-- <li class=\"\"><a data-toggle=\"modal\" data-target=\"#cvServerInfo\"><i class=\"fa fa-fw fa-server\"></i> Data model</a></li> -->\n" +
    "                <li class=\"\" ng-class=\"{ 'disabled': cubesService.state != 2 }\"><a data-toggle=\"modal\" data-target=\"#cvServerInfo\" ><i class=\"fa fa-fw fa-database\"></i> О сервере</a></li>\n" +
    "\n" +
    "                <div class=\"divider\"></div>\n" +
    "\n" +
    "                <li class=\"\"><a href=\"http://github.com/jjmontesl/cubesviewer/blob/master/doc/guide/cubesviewer-user-main.md\" target=\"_blank\"><i class=\"fa fa-fw fa-question\"></i> Руководство</a></li>\n" +
    "                <li class=\"\"><a data-toggle=\"modal\" data-target=\"#cvAboutModal\"><i class=\"fa fa-fw fa-info\"></i> О CubesViewer...</a></li>\n" +
    "\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "\n" +
    "        <div style=\"display: inline-block; margin-left: 10px; margin-bottom: 0px;\">\n" +
    "\n" +
    "             <div class=\"form-group hidden-xs\" style=\"display: inline-block; margin-bottom: 0px;\">\n" +
    "                <button class=\"btn\" type=\"button\" title=\"2 column\" ng-disabled=\"studioViewsService.views.length == 0\" ng-class=\"cvOptions.studioTwoColumn ? 'btn-active btn-success' : 'btn-primary'\" ng-click=\"toggleTwoColumn()\"><i class=\"fa fa-fw fa-columns\"></i></button>\n" +
    "             </div>\n" +
    "             <div class=\"form-group\" style=\"display: inline-block; margin-bottom: 0px;\">\n" +
    "                <button class=\"btn\" type=\"button\" title=\"Hide controls\" ng-disabled=\"studioViewsService.views.length == 0\" ng-class=\"cvOptions.hideControls ? 'btn-active btn-success' : 'btn-primary'\" ng-click=\"toggleHideControls()\"><i class=\"fa fa-fw fa-unlock-alt\"></i></button>\n" +
    "             </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"cv-gui-modals\">\n" +
    "            <div ng-include=\"'studio/about.html'\"></div>\n" +
    "            <div ng-include=\"'studio/serverinfo.html'\"></div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"cv-gui-workspace\">\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "            <div ng-if=\"cubesService.state == 3\" class=\"col-xs-12\" style=\"margin-bottom: 10px;\">\n" +
    "                <div class=\"alert alert-danger\" style=\"margin: 0px;\">\n" +
    "                  <p>Невозможно подсоединиться к серверу: {{ cubesService.stateText }}</p>\n" +
    "                  <p>Попробуйте снова.</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"row cv-views-container\" data-masonry='{ \"itemSelector\": \".cv-view-container\", \"columnWidth\": \".cv-views-gridsizer\", \"percentPosition\": true }'>\n" +
    "\n" +
    "            <div class=\"col-xs-1 cv-views-gridsizer\"></div>\n" +
    "\n" +
    "            <div ng-repeat=\"studioView in studioViewsService.views\" style=\"display: none;\" class=\"col-xs-12 cv-view-container sv{{ studioView.id }}\" ng-class=\"(cvOptions.studioTwoColumn ? 'col-sm-6' : 'col-sm-12')\">\n" +
    "                <div >\n" +
    "                    <div cv-studio-view view=\"studioView\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('views/cube/alerts.html',
    "<div>\n" +
    "\n" +
    "    <div ng-if=\"view.requestFailed\" class=\"alert alert-dismissable alert-danger\" style=\"margin-bottom: 5px;\">\n" +
    "        <div style=\"display: inline-block;\"><i class=\"fa fa-exclamation\"></i></div>\n" +
    "        <div style=\"display: inline-block; margin-left: 20px;\">\n" +
    "            An error has occurred. Cannot present view.<br />\n" +
    "            Please try again and contact your administrator if the problem persists.\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-if=\"view.resultLimitHit\" class=\"alert alert-dismissable alert-warning\" style=\"margin-bottom: 5px;\">\n" +
    "        <button type=\"button\" class=\"close\" ng-click=\"view._resultLimitHit = false;\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\n" +
    "        <div style=\"display: inline-block; vertical-align: top;\"><i class=\"fa fa-exclamation\"></i></div>\n" +
    "        <div style=\"display: inline-block; margin-left: 20px;\">\n" +
    "            Limit of {{ cubesService.cubesserver.info.json_record_limit }} items has been hit. <b>Results are incomplete.</b><br />\n" +
    "            <i>Tip</i>: reduce level of drilldown or filter your selection to reduce the number of items in the result.\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('views/cube/chart/chart-common.html',
    "<div ng-show=\"(view.grid.data.length > 0 && view.params.yaxis != null) && (!(view.params.charttype == 'pie' && view.grid.columnDefs.length > 2)) && (!(view.params.charttype == 'radar' && view.grid.columnDefs.length < 4))\" style=\"width: 99%;\">\n" +
    "    <div>\n" +
    "        <div class=\"cv-chart-container\">\n" +
    "            <svg style=\"height: 400px;\" />\n" +
    "        </div>\n" +
    "        <div ng-hide=\"view.getControlsHidden() || view.params.charttype == 'radar'\" style=\"font-size: 8px; float: right;\">\n" +
    "            <a href=\"\" class=\"cv-chart-height\" ng-click=\"chartCtrl.resizeChart(400);\">Small</a>\n" +
    "            <a href=\"\" class=\"cv-chart-height\" ng-click=\"chartCtrl.resizeChart(550);\">Medium</a>\n" +
    "            <a href=\"\" class=\"cv-chart-height\" ng-click=\"chartCtrl.resizeChart(700);\">Tall</a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-if=\"view.params.yaxis == null\" class=\"alert alert-info\" style=\"margin-bottom: 0px;\">\n" +
    "    <p>\n" +
    "      Невозможно отобразить график: <b>значение</b> не выбрано.\n" +
    "    </p>\n" +
    "    <p>\n" +
    "      Подсказка: используйте меню <kbd><i class=\"fa fa-fw fa-cogs\"></i> Вид &gt; <i class=\"fa fa-fw fa-crosshairs\"></i> Значение</kbd>.\n" +
    "    </p>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-if=\"view.pendingRequests == 0 && view.params.yaxis != null && view.grid.data.length == 0\" class=\"alert alert-info\" style=\"margin-bottom: 0px;\">\n" +
    "    <p>\n" +
    "      Невозможно отобразить график: <b>нет строк</b>.\n" +
    "    </p>\n" +
    "    <p>\n" +
    "      Подсказка: используйте меню <kbd><i class=\"fa fa-fw fa-cogs\"></i> Вид</kbd> чтобы выбрать горизонтальное измерение.\n" +
    "    </p>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-if=\"view.pendingRequests == 0 && view.params.charttype == 'pie' && view.grid.columnDefs.length > 2\" class=\"alert alert-info\" style=\"margin-bottom: 0px;\">\n" +
    "    <p>\n" +
    "      Невозможно отобразить <b>круговую диаграмму</b> когда <b>выбрано более одного</b> столбца.<br />\n" +
    "    </p>\n" +
    "    <p>\n" +
    "      Подсказка: посмотрите данные графика и столбцы в режиме <a href=\"\" ng-click=\"setViewMode('series')\" class=\"alert-link\">ряды</a>,\n" +
    "      или <a href=\"\" ng-click=\"selectXAxis(null);\" class=\"alert-link\">удалите горизонтальное измерение</a>.\n" +
    "    </p>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-if=\"view.pendingRequests == 0 && view.params.yaxis != null && view.params.charttype == 'radar' && view.grid.columnDefs.length < 4\" class=\"alert alert-info\" style=\"margin-bottom: 0px;\">\n" +
    "  Невозможно отобразить <b>график \"радар\"</b> когда <b>менее 3 столбцов</b> выбрано.<br />\n" +
    "  Подсказка: посмотрите данные графика и столбцы в режиме <a href=\"\" ng-click=\"setViewMode('series')\" class=\"alert-link\">ряды</a>.\n" +
    "</div>\n"
  );


  $templateCache.put('views/cube/chart/chart.html',
    "<div ng-controller=\"CubesViewerViewsCubeChartController as chartCtrl\">\n" +
    "\n" +
    "    <div ng-if=\"view.params.charttype == 'pie'\">\n" +
    "        <h3><i class=\"fa fa-fw fa-pie-chart\"></i> График\n" +
    "            <i ng-show=\"view.pendingRequests > 0\" class=\"fa fa-circle-o-notch fa-spin fa-fw margin-bottom text-info pull-right\"></i>\n" +
    "        </h3>\n" +
    "        <div ng-if=\"view.pendingRequests > 0\" class=\"loadingbar-content\">\n" +
    "            <span class=\"loadingbar-expand\"></span>\n" +
    "        </div>\n" +
    "        <div ng-controller=\"CubesViewerViewsCubeChartPieController\">\n" +
    "            <div ng-include=\"'views/cube/chart/chart-common.html'\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-if=\"view.params.charttype == 'bars-vertical'\">\n" +
    "        <h3><i class=\"fa fa-fw fa-bar-chart\"></i> График\n" +
    "            <i ng-show=\"view.pendingRequests > 0\" class=\"fa fa-circle-o-notch fa-spin fa-fw margin-bottom text-info pull-right\"></i>\n" +
    "        </h3>\n" +
    "        <div ng-if=\"view.pendingRequests > 0\" class=\"loadingbar-content\">\n" +
    "            <span class=\"loadingbar-expand\"></span>\n" +
    "        </div>\n" +
    "        <div ng-controller=\"CubesViewerViewsCubeChartBarsVerticalController\">\n" +
    "            <div ng-include=\"'views/cube/chart/chart-common.html'\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-if=\"view.params.charttype == 'bars-horizontal'\">\n" +
    "        <h3><i class=\"fa fa-fw fa-bar-chart fa-rotate-270\"></i> График\n" +
    "            <i ng-show=\"view.pendingRequests > 0\" class=\"fa fa-circle-o-notch fa-spin fa-fw margin-bottom text-info pull-right\"></i>\n" +
    "        </h3>\n" +
    "        <div ng-if=\"view.pendingRequests > 0\" class=\"loadingbar-content\">\n" +
    "            <span class=\"loadingbar-expand\"></span>\n" +
    "        </div>\n" +
    "        <div ng-controller=\"CubesViewerViewsCubeChartBarsHorizontalController\">\n" +
    "            <div ng-include=\"'views/cube/chart/chart-common.html'\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-if=\"view.params.charttype == 'lines'\">\n" +
    "        <h3><i class=\"fa fa-fw fa-line-chart\"></i> График\n" +
    "            <i ng-show=\"view.pendingRequests > 0\" class=\"fa fa-circle-o-notch fa-spin fa-fw margin-bottom text-info pull-right\"></i>\n" +
    "        </h3>\n" +
    "        <div ng-if=\"view.pendingRequests > 0\" class=\"loadingbar-content\">\n" +
    "            <span class=\"loadingbar-expand\"></span>\n" +
    "        </div>\n" +
    "        <div ng-controller=\"CubesViewerViewsCubeChartLinesController\">\n" +
    "            <div ng-include=\"'views/cube/chart/chart-common.html'\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-if=\"view.params.charttype == 'lines-stacked'\">\n" +
    "        <h3><i class=\"fa fa-fw fa-area-chart\"></i> График\n" +
    "            <i ng-show=\"view.pendingRequests > 0\" class=\"fa fa-circle-o-notch fa-spin fa-fw margin-bottom text-info pull-right\"></i>\n" +
    "        </h3>\n" +
    "        <div ng-if=\"view.pendingRequests > 0\" class=\"loadingbar-content\">\n" +
    "            <span class=\"loadingbar-expand\"></span>\n" +
    "        </div>\n" +
    "        <div ng-controller=\"CubesViewerViewsCubeChartLinesController\">\n" +
    "            <div ng-include=\"'views/cube/chart/chart-common.html'\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-if=\"view.params.charttype == 'radar'\">\n" +
    "        <h3><i class=\"fa fa-fw fa-bullseye\"></i> График\n" +
    "            <i ng-show=\"view.pendingRequests > 0\" class=\"fa fa-circle-o-notch fa-spin fa-fw margin-bottom text-info pull-right\"></i>\n" +
    "        </h3>\n" +
    "        <div ng-if=\"view.pendingRequests > 0\" class=\"loadingbar-content\">\n" +
    "            <span class=\"loadingbar-expand\"></span>\n" +
    "        </div>\n" +
    "        <div ng-controller=\"CubesViewerViewsCubeChartRadarController\">\n" +
    "            <div ng-include=\"'views/cube/chart/chart-common.html'\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-if=\"view.params.charttype == 'sunburst'\">\n" +
    "        <h3><i class=\"fa fa-fw fa-sun-o\"></i> График\n" +
    "            <i ng-show=\"view.pendingRequests > 0\" class=\"fa fa-circle-o-notch fa-spin fa-fw margin-bottom text-info pull-right\"></i>\n" +
    "        </h3>\n" +
    "        <div ng-if=\"view.pendingRequests > 0\" class=\"loadingbar-content\">\n" +
    "            <span class=\"loadingbar-expand\"></span>\n" +
    "        </div>\n" +
    "        <div ng-controller=\"CubesViewerViewsCubeChartSunburstController\">\n" +
    "            <div ng-include=\"'views/cube/chart/chart-common.html'\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('views/cube/cube-menu-drilldown.html',
    "  <button class=\"btn btn-primary btn-sm dropdown-toggle drilldownbutton\" ng-disabled=\"view.params.mode == 'facts'\" type=\"button\" data-toggle=\"dropdown\" data-submenu>\n" +
    "    <i class=\"fa fa-fw fa-arrow-down\"></i> <span class=\"hidden-xs\" ng-class=\"{ 'hidden-sm hidden-md': cvOptions.studioTwoColumn }\">Развертка</span> <span class=\"caret\"></span>\n" +
    "  </button>\n" +
    "\n" +
    "  <ul class=\"dropdown-menu dropdown-menu-right cv-view-menu-drilldown\">\n" +
    "\n" +
    "      <!-- if ((grayout_drill) && ((($.grep(view.params.drilldown, function(ed) { return ed == dimension.name; })).length > 0))) { -->\n" +
    "      <li on-repeat-done ng-repeat-start=\"dimension in view.cube.dimensions\" ng-if=\"dimension.levels.length == 1\" ng-click=\"selectDrill(dimension.name, true);\">\n" +
    "        <a href=\"\">{{ dimension.label }}</a>\n" +
    "      </li>\n" +
    "      <li ng-repeat-end ng-if=\"dimension.levels.length != 1\" class=\"dropdown-submenu\">\n" +
    "        <a tabindex=\"0\">{{ dimension.label }}</a>\n" +
    "\n" +
    "        <ul ng-if=\"dimension.hierarchies_count() != 1\" class=\"dropdown-menu\">\n" +
    "            <li ng-repeat=\"(hikey,hi) in dimension.hierarchies\" class=\"dropdown-submenu\">\n" +
    "                <a tabindex=\"0\" href=\"\" onclick=\"return false;\">{{ hi.label }}</a>\n" +
    "                <ul class=\"dropdown-menu\">\n" +
    "                    <li ng-repeat=\"level in hi.levels\" ng-click=\"selectDrill(dimension.name + '@' + hi.name + ':' + level.name, true)\"><a href=\"\">{{ level.label }}</a></li>\n" +
    "                </ul>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "\n" +
    "        <ul ng-if=\"dimension.hierarchies_count() == 1\" class=\"dropdown-menu\">\n" +
    "            <li ng-repeat=\"level in dimension.default_hierarchy().levels\" ng-click=\"selectDrill(dimension.name + '@' + dimension.default_hierarchy().name + ':' + level.name, true)\"><a href=\"\">{{ level.label }}</a></li>\n" +
    "        </ul>\n" +
    "\n" +
    "      </li>\n" +
    "\n" +
    "      <div class=\"divider\"></div>\n" +
    "\n" +
    "      <li ng-class=\"{ 'disabled': view.params.drilldown.length == 0 }\" ng-click=\"selectDrill('')\"><a href=\"\"><i class=\"fa fa-fw fa-close\"></i> Нет</a></li>\n" +
    "\n" +
    "  </ul>\n"
  );


  $templateCache.put('views/cube/cube-menu-filter.html',
    "  <button class=\"btn btn-primary btn-sm dropdown-toggle cutbutton\" type=\"button\" data-toggle=\"dropdown\" data-submenu>\n" +
    "    <i class=\"fa fa-fw fa-filter\"></i> <span class=\"hidden-xs\" ng-class=\"{ 'hidden-sm hidden-md': cvOptions.studioTwoColumn }\">Фильтр</span> <span class=\"caret\"></span>\n" +
    "  </button>\n" +
    "\n" +
    "  <ul class=\"dropdown-menu dropdown-menu-right cv-view-menu cv-view-menu-cut\">\n" +
    "\n" +
    "    <li ng-show=\"view.params.mode == 'explore'\" ng-click=\"filterSelected()\" ng-class=\"{ 'disabled': view.params.drilldown.length != 1 }\"><a href=\"\"><i class=\"fa fa-fw fa-filter\"></i> Filter selected rows</a></li>\n" +
    "    <div ng-show=\"view.params.mode == 'explore'\" class=\"divider\"></div>\n" +
    "\n" +
    "    <li class=\"dropdown-submenu\">\n" +
    "      <a tabindex=\"0\"><i class=\"fa fa-fw fa-bars\"></i> Фильтр по размерности</a>\n" +
    "        <ul class=\"dropdown-menu\">\n" +
    "\n" +
    "          <li on-repeat-done ng-repeat-start=\"dimension in view.cube.dimensions\" ng-if=\"dimension.levels.length == 1\" ng-click=\"showDimensionFilter(dimension.name);\">\n" +
    "            <a href=\"\">{{ dimension.label }}</a>\n" +
    "          </li>\n" +
    "          <li ng-repeat-end ng-if=\"dimension.levels.length != 1\" class=\"dropdown-submenu\">\n" +
    "            <a tabindex=\"0\">{{ dimension.label }}</a>\n" +
    "\n" +
    "            <ul ng-if=\"dimension.hierarchies_count() != 1\" class=\"dropdown-menu\">\n" +
    "                <li ng-repeat=\"(hikey,hi) in dimension.hierarchies\" class=\"dropdown-submenu\">\n" +
    "                    <a tabindex=\"0\" href=\"\" onclick=\"return false;\">{{ hi.label }}</a>\n" +
    "                    <ul class=\"dropdown-menu\">\n" +
    "                        <!-- ng-click=\"selectDrill(dimension.name + '@' + hi.name + ':' + level.name, true)\"  -->\n" +
    "                        <li ng-repeat=\"level in hi.levels\" ng-click=\"showDimensionFilter(dimension.name + '@' + hi.name + ':' + level.name )\"><a href=\"\">{{ level.label }}</a></li>\n" +
    "                    </ul>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "\n" +
    "            <ul ng-if=\"dimension.hierarchies_count() == 1\" class=\"dropdown-menu\">\n" +
    "                <!--  selectDrill(dimension.name + ':' + level.name, true) -->\n" +
    "                <li ng-repeat=\"level in dimension.default_hierarchy().levels\" ng-click=\"showDimensionFilter(dimension.name + '@' + dimension.default_hierarchy().name + ':' + level.name);\"><a href=\"\">{{ level.label }}</a></li>\n" +
    "            </ul>\n" +
    "\n" +
    "          </li>\n" +
    "\n" +
    "        </ul>\n" +
    "    </li>\n" +
    "\n" +
    "    <li class=\"dropdown-submenu\">\n" +
    "      <a tabindex=\"0\"><i class=\"fa fa-fw fa-calendar\"></i> Фильтр по дате</a>\n" +
    "        <ul class=\"dropdown-menu\">\n" +
    "          <li ng-repeat=\"dimension in view.cube.dimensions\" ng-if=\"dimension.isDateDimension()\">\n" +
    "            <a href=\"\" ng-click=\"selectDateFilter(dimension.name + ((dimension.info['cv-datefilter-hierarchy']) ? '@' + dimension.info['cv-datefilter-hierarchy'] : ''), true)\">\n" +
    "                {{ dimension.label + ((dimension.hierarchy(dimension.info[\"cv-datefilter-hierarchy\"])) ? \" / \" + dimension.hierarchy(dimension.info[\"cv-datefilter-hierarchy\"]).label : \"\") }}\n" +
    "            </a>\n" +
    "          </li>\n" +
    "          <li ng-if=\"view.cube.dateDimensions().length == 0\" class=\"disabled\">\n" +
    "            <a href=\"\" ng-click=\"\"><i>Фильтр по дате не определен для этого куба.</i></a>\n" +
    "          </li>\n" +
    "\n" +
    "        </ul>\n" +
    "    </li>\n" +
    "\n" +
    "    <!--\n" +
    "    <li class=\"dropdown-submenu\">\n" +
    "        <a tabindex=\"0\"><i class=\"fa fa-fw fa-arrows-h\"></i> Range filter</a>\n" +
    "        <ul class=\"dropdown-menu\">\n" +
    "\n" +
    "          <li on-repeat-done ng-repeat-start=\"dimension in view.cube.dimensions\" ng-if=\"dimension.levels.length == 1\" ng-click=\"showDimensionFilter(dimension.name);\">\n" +
    "            <a href=\"\">{{ dimension.label }}</a>\n" +
    "          </li>\n" +
    "          <li ng-repeat-end ng-if=\"dimension.levels.length != 1\" class=\"dropdown-submenu\">\n" +
    "            <a tabindex=\"0\">{{ dimension.label }}</a>\n" +
    "\n" +
    "            <ul ng-if=\"dimension.hierarchies_count() != 1\" class=\"dropdown-menu\">\n" +
    "                <li ng-repeat=\"(hikey,hi) in dimension.hierarchies\" class=\"dropdown-submenu\">\n" +
    "                    <a tabindex=\"0\" href=\"\" onclick=\"return false;\">{{ hi.label }}</a>\n" +
    "                    <ul class=\"dropdown-menu\">\n" +
    "                        <li ng-repeat=\"level in hi.levels\" ng-click=\"showDimensionFilter(dimension.name + '@' + hi.name + ':' + level.name )\"><a href=\"\">{{ level.label }}</a></li>\n" +
    "                    </ul>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "\n" +
    "            <ul ng-if=\"dimension.hierarchies_count() == 1\" class=\"dropdown-menu\">\n" +
    "                <li ng-repeat=\"level in dimension.default_hierarchy().levels\" ng-click=\"showDimensionFilter(level);\"><a href=\"\">{{ level.label }}</a></li>\n" +
    "            </ul>\n" +
    "\n" +
    "          </li>\n" +
    "\n" +
    "        </ul>\n" +
    "    </li>\n" +
    "     -->\n" +
    "\n" +
    "    <div class=\"divider\"></div>\n" +
    "\n" +
    "    <li ng-class=\"{ 'disabled': view.params.cuts.length == 0 && view.params.datefilters.length == 0 }\" ng-click=\"clearFilters()\"><a href=\"\"><i class=\"fa fa-fw fa-trash\"></i> Очистить фильтры</a></li>\n" +
    "\n" +
    "  </ul>\n"
  );


  $templateCache.put('views/cube/cube-menu-panel.html',
    "  <button class=\"btn btn-primary btn-sm dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" data-submenu>\n" +
    "    <i class=\"fa fa-fw fa-file\"></i> <span class=\"hidden-xs\" ng-class=\"{ 'hidden-sm hidden-md': cvOptions.studioTwoColumn }\">Панель</span> <span class=\"caret\"></span>\n" +
    "  </button>\n" +
    "\n" +
    "  <ul class=\"dropdown-menu dropdown-menu-right cv-view-menu cv-view-menu-view\">\n" +
    "\n" +
    "    <li ng-click=\"viewsService.studioViewsService.studioScope.showRenameView(view)\"><a><i class=\"fa fa-fw fa-pencil\"></i> Переименовать...</a></li>\n" +
    "    <li ng-click=\"viewsService.studioViewsService.studioScope.cloneView(view)\"><a><i class=\"fa fa-fw fa-clone\"></i> Клонировать</a></li>\n" +
    "\n" +
    "    <div ng-if=\"cvOptions.backendUrl\" class=\"divider\"></div>\n" +
    "    <li ng-if=\"cvOptions.backendUrl\" ng-click=\"reststoreService.saveView(view)\"><a><i class=\"fa fa-fw fa-save\"></i> Сохранить</a></li>\n" +
    "    <li ng-if=\"cvOptions.backendUrl\" ng-click=\"reststoreService.shareView(view, ! view.shared)\"><a><i class=\"fa fa-fw fa-share\"></i> {{ view.shared ? \"Отменить\" : \"Поделиться\" }}</a></li>\n" +
    "    <li ng-if=\"cvOptions.backendUrl\" ng-click=\"reststoreService.deleteView(view)\"><a><i class=\"fa fa-fw fa-trash-o\"></i> Удалить...</a></li>\n" +
    "\n" +
    "    <div class=\"divider\"></div>\n" +
    "    <li ng-click=\"viewsService.studioViewsService.studioScope.showSerializeView(view)\"><a><i class=\"fa fa-fw fa-code\"></i> Сеарилизовать...</a></li>\n" +
    "    <div class=\"divider\"></div>\n" +
    "    <li ng-click=\"viewsService.studioViewsService.closeView(view)\"><a><i class=\"fa fa-fw fa-close\"></i> Закрыть</a></li>\n" +
    "  </ul>\n"
  );


  $templateCache.put('views/cube/cube-menu-view.html',
    "  <button class=\"btn btn-primary btn-sm dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" data-submenu>\n" +
    "    <i class=\"fa fa-fw fa-cogs\"></i> <span class=\"hidden-xs\" ng-class=\"{ 'hidden-sm hidden-md': cvOptions.studioTwoColumn }\">Вид</span> <span class=\"caret\"></span>\n" +
    "  </button>\n" +
    "\n" +
    "  <ul class=\"dropdown-menu dropdown-menu-right cv-view-menu cv-view-menu-view\">\n" +
    "\n" +
    "    <li ng-show=\"view.params.mode == 'chart'\" class=\"dropdown-submenu\">\n" +
    "      <a tabindex=\"0\" ><i class=\"fa fa-fw fa-area-chart\"></i> Тип графика</a>\n" +
    "        <ul class=\"dropdown-menu\">\n" +
    "          <li ng-click=\"selectChartType('pie')\"><a href=\"\"><i class=\"fa fa-fw fa-pie-chart\"></i> Круговая диаграмма</a></li>\n" +
    "          <li ng-click=\"selectChartType('bars-vertical')\"><a href=\"\"><i class=\"fa fa-fw fa-bar-chart\"></i> Столбцы</a></li>\n" +
    "          <li ng-click=\"selectChartType('bars-horizontal')\"><a href=\"\"><i class=\"fa fa-fw fa-rotate-270 fa-bar-chart\"></i> Строки</a></li>\n" +
    "          <li ng-click=\"selectChartType('lines')\"><a href=\"\"><i class=\"fa fa-fw fa-line-chart\"></i> Линии</a></li>\n" +
    "          <li ng-click=\"selectChartType('lines-stacked')\"><a href=\"\"><i class=\"fa fa-fw fa-area-chart\"></i> Площади</a></li>\n" +
    "          <li ng-click=\"selectChartType('radar')\"><a href=\"\"><i class=\"fa fa-fw fa-bullseye\"></i> Радар</a></li>\n" +
    "\n" +
    "          <!-- <div class=\"divider\"></div>  -->\n" +
    "\n" +
    "          <!--\n" +
    "          <li><a href=\"\"><i class=\"fa fa-fw fa-dot-circle-o\"></i> Bubbles</a></li>\n" +
    "          <li><a href=\"\"><i class=\"fa fa-fw fa-square\"></i> Treemap</a></li>\n" +
    "          <li ng-click=\"selectChartType('sunburst')\"><a href=\"\"><i class=\"fa fa-fw fa-sun-o\"></i> Санберст</a></li>\n" +
    "          -->\n" +
    "\n" +
    "          <!--\n" +
    "          <div class=\"divider\"></div>\n" +
    "\n" +
    "          <li><a href=\"\"><i class=\"fa fa-fw fa-globe\"></i> Map</a></li>\n" +
    "           -->\n" +
    "\n" +
    "        </ul>\n" +
    "    </li>\n" +
    "\n" +
    "    <!--\n" +
    "    <li ng-show=\"view.params.mode == 'chart' && (view.params.charttype == 'lines-stacked' || view.params.charttype == 'lines' || view.params.charttype == 'bars-horizontal')\" class=\"dropdown-submenu\">\n" +
    "        <a tabindex=\"0\" ><i class=\"fa fa-fw fa-sliders\"></i> Chart options</a>\n" +
    "        <ul class=\"dropdown-menu\">\n" +
    "    -->\n" +
    "        <li class=\"dropdown-submenu\" ng-show=\"view.params.mode == 'chart' && (view.params.charttype == 'lines-stacked' || view.params.charttype == 'lines')\">\n" +
    "          <a href=\"\"><i class=\"fa fa-fw fa-angle-up\"></i> Тип кривой</a>\n" +
    "            <ul class=\"dropdown-menu\">\n" +
    "              <li ng-class=\"{'active': view.params.chartoptions.lineInterpolation == 'linear'}\" ng-click=\"view.params.chartoptions.lineInterpolation = 'linear'; refreshView();\"><a href=\"\"> Линейный</a></li>\n" +
    "              <li ng-class=\"{'active': view.params.chartoptions.lineInterpolation == 'monotone'}\" ng-click=\"view.params.chartoptions.lineInterpolation = 'monotone'; refreshView();\"><a href=\"\"> Гладкий</a></li>\n" +
    "              <!-- <li ng-class=\"{'active': view.params.chartoptions.lineInterpolation == 'cardinal'}\" ng-click=\"view.params.chartoptions.lineInterpolation = 'cardinal'; refreshView();\"><a href=\"\"> Гладкий (Основной)</a></li>  -->\n" +
    "            </ul>\n" +
    "        </li>\n" +
    "\n" +
    "        <li ng-class=\"{'disabled': view.grid.data.length != 2 }\" ng-show=\"view.params.mode == 'chart' && view.params.charttype == 'bars-horizontal'\" ng-click=\"view.params.chartoptions.mirrorSerie2 = !view.params.chartoptions.mirrorSerie2; refreshView();\">\n" +
    "          <a><i class=\"fa fa-fw fa-arrows-h\"></i> Инвертировать 2е ряды\n" +
    "                <span style=\"margin-left: 5px;\" class=\"label label-default\" ng-class=\"{ 'label-success': view.params.chartoptions.mirrorSerie2 }\">{{ view.params.chartoptions.mirrorSerie2 ? \"ON\" : \"OFF\" }}</span>\n" +
    "            </a>\n" +
    "        </li>\n" +
    "\n" +
    "    <!--\n" +
    "        </ul>\n" +
    "    </li>\n" +
    "     -->\n" +
    "\n" +
    "    <li ng-show=\"view.params.mode == 'chart'\" ng-click=\"view.params.chartoptions.showLegend = !view.params.chartoptions.showLegend; refreshView();\">\n" +
    "      <a><i class=\"fa fa-fw\" ng-class=\"{'fa-toggle-on': view.params.chartoptions.showLegend, 'fa-toggle-off': ! view.params.chartoptions.showLegend }\"></i> Легенда\n" +
    "            <span style=\"margin-left: 5px;\" class=\"label label-default\" ng-class=\"{ 'label-success': view.params.chartoptions.showLegend }\">{{ view.params.chartoptions.showLegend ? \"ON\" : \"OFF\" }}</span>\n" +
    "        </a>\n" +
    "    </li>\n" +
    "\n" +
    "    <div ng-show=\"view.params.mode == 'chart'\" class=\"divider\"></div>\n" +
    "\n" +
    "    <li ng-show=\"view.params.mode == 'series' || view.params.mode == 'chart'\" class=\"dropdown-submenu\">\n" +
    "      <a tabindex=\"0\"><i class=\"fa fa-fw fa-long-arrow-right\"></i> Горизонтальная размерность</a>\n" +
    "        <ul class=\"dropdown-menu\">\n" +
    "\n" +
    "          <li on-repeat-done ng-repeat-start=\"dimension in view.cube.dimensions\" ng-if=\"dimension.levels.length == 1\" ng-click=\"selectXAxis(dimension.name)\">\n" +
    "            <a href=\"\">{{ dimension.label }}</a>\n" +
    "          </li>\n" +
    "          <li ng-repeat-end ng-if=\"dimension.levels.length != 1\" class=\"dropdown-submenu\">\n" +
    "            <a tabindex=\"0\">{{ dimension.label }}</a>\n" +
    "\n" +
    "            <ul ng-if=\"dimension.hierarchies_count() != 1\" class=\"dropdown-menu\">\n" +
    "                <li ng-repeat=\"(hikey,hi) in dimension.hierarchies\" class=\"dropdown-submenu\">\n" +
    "                    <a tabindex=\"0\" href=\"\" onclick=\"return false;\">{{ hi.label }}</a>\n" +
    "                    <ul class=\"dropdown-menu\">\n" +
    "                        <!-- ng-click=\"selectDrill(dimension.name + '@' + hi.name + ':' + level.name, true)\"  -->\n" +
    "                        <li ng-repeat=\"level in hi.levels\" ng-click=\"selectXAxis(dimension.name + '@' + hi.name + ':' + level.name )\"><a href=\"\">{{ level.label }}</a></li>\n" +
    "                    </ul>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "\n" +
    "            <ul ng-if=\"dimension.hierarchies_count() == 1\" class=\"dropdown-menu\">\n" +
    "                <!--  selectDrill(dimension.name + ':' + level.name, true) -->\n" +
    "                <li ng-repeat=\"level in dimension.default_hierarchy().levels\" ng-click=\"selectXAxis(dimension.name + ':' + level.name);\"><a href=\"\">{{ level.label }}</a></li>\n" +
    "            </ul>\n" +
    "\n" +
    "          </li>\n" +
    "\n" +
    "          <div class=\"divider\"></div>\n" +
    "\n" +
    "          <li ng-click=\"selectXAxis(null);\"><a href=\"\"><i class=\"fa fa-fw fa-close\"></i> Нет</a></li>\n" +
    "\n" +
    "        </ul>\n" +
    "    </li>\n" +
    "\n" +
    "    <li ng-show=\"view.params.mode == 'series' || view.params.mode == 'chart'\" class=\"dropdown-submenu\">\n" +
    "      <a tabindex=\"0\"><i class=\"fa fa-fw fa-crosshairs\"></i> Значение</a>\n" +
    "        <ul class=\"dropdown-menu\">\n" +
    "\n" +
    "          <li ng-repeat=\"measure in view.cube.measures\" ng-if=\"view.cube.measureAggregates(measure.name).length > 0\" class=\"dropdown-submenu\">\n" +
    "            <a href=\"\">{{ measure.label }}</a>\n" +
    "            <ul class=\"dropdown-menu\">\n" +
    "                <li ng-repeat=\"aggregate in view.cube.measureAggregates(measure.name)\" >\n" +
    "                    <a href=\"\" ng-click=\"selectMeasure(aggregate.ref)\">{{ aggregate.label }}</a>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "          </li>\n" +
    "\n" +
    "          <div class=\"divider\" ng-if=\"view.cube.measureAggregates(null).length > 0\"></div>\n" +
    "          <li ng-repeat=\"aggregate in view.cube.measureAggregates(null)\" ng-if=\"view.cube.measureAggregates(null).length > 0\" >\n" +
    "            <a href=\"\" ng-click=\"selectMeasure(aggregate.ref)\">{{ aggregate.label }}</a>\n" +
    "          </li>\n" +
    "\n" +
    "        </ul>\n" +
    "    </li>\n" +
    "\n" +
    "    <div ng-show=\"cvOptions.seriesOperationsEnabled && (view.params.mode == 'series' || view.params.mode == 'chart')\" class=\"divider\"></div>\n" +
    "\n" +
    "    <li ng-show=\"cvOptions.seriesOperationsEnabled && (view.params.mode == 'series' || view.params.mode == 'chart')\" class=\"dropdown-submenu\">\n" +
    "      <a tabindex=\"0\" ><i class=\"fa fa-fw fa-calculator\"></i> Операции на рядах</a>\n" +
    "        <ul class=\"dropdown-menu\">\n" +
    "          <li ng-click=\"selectOperation('difference')\"><a href=\"\"><i class=\"fa fa-fw fa-line-chart\"></i> Разница</a></li>\n" +
    "          <li ng-click=\"selectOperation('percentage')\"><a href=\"\"><i class=\"fa fa-fw fa-percent\"></i> Изменить размерность</a></li>\n" +
    "          <!--\n" +
    "              <li ng-click=\"selectOperation('accum')\"><a href=\"\"><i class=\"fa fa-fw\">&sum;</i> Суммированные</a></li>\n" +
    "          <div class=\"divider\"></div>\n" +
    "          <li ng-click=\"selectOperation('fill-zeros')\"><a href=\"\"><i class=\"fa fa-fw\">0</i> Заменить пустые нулями</a></li>\n" +
    "           -->\n" +
    "          <div class=\"divider\"></div>\n" +
    "          <li ng-click=\"selectOperation(null)\"><a href=\"\"><i class=\"fa fa-fw fa-times\"></i> Очистить операции</a></li>\n" +
    "        </ul>\n" +
    "    </li>\n" +
    "\n" +
    "    <div ng-show=\"view.params.mode == 'series' || view.params.mode == 'chart'\" class=\"divider\"></div>\n" +
    "\n" +
    "    <li ng-show=\"view.params.mode != 'chart'\" ng-click=\"exportService.exportGridAsCsv(view)\"><a><i class=\"fa fa-fw fa-table\"></i> Скачать таблицу</a></li>\n" +
    "    <li ng-show=\"view.params.mode == 'chart' && view.params.charttype != 'radar' \" ng-click=\"view.exportChartAsPNG()\"><a><i class=\"fa fa-fw fa-picture-o\"></i> Скачать график</a></li>\n" +
    "    <li ng-click=\"exportService.exportFacts(view)\"><a><i class=\"fa fa-fw fa-th\"></i> Скачать факты</a></li>\n" +
    "\n" +
    "  </ul>\n"
  );


  $templateCache.put('views/cube/cube.html',
    "<div class=\"cv-view-panel\" ng-controller=\"CubesViewerViewsCubeController as cubeView\" >\n" +
    "\n" +
    "    <div ng-if=\"view.state == 3\">\n" +
    "        <div class=\"alert alert-danger\" style=\"margin: 0px;\">\n" +
    "            <p>An error occurred. Cannot present view.</p>\n" +
    "            <p ng-if=\"cubesService.state != 3\">{{ view.error }}</p>\n" +
    "            <p ng-if=\"cubesService.state == 3\">Could not connect to data server: {{ cubesService.stateText }}</p>\n" +
    "            <p>Please try again and contact your administrator if the problem persists.</p>\n" +
    "            <p class=\"text-right\">\n" +
    "                <a class=\"alert-link\" href=\"http://jjmontesl.github.io/cubesviewer/\" target=\"_blank\">CubesViewer Data Visualizer</a>\n" +
    "            </p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div>\n" +
    "        <h2 ng-show=\"view.getControlsHidden()\" style=\"margin-top: 5px;\">\n" +
    "            <i class=\"fa fa-fw fa-file-o\"></i> {{ view.params.name }}\n" +
    "        </h2>\n" +
    "\n" +
    "        <div ng-include=\"'views/cube/alerts.html'\"></div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-if=\"view.state == 2\" style=\"min-height: 80px;\">\n" +
    "\n" +
    "        <div class=\"cv-view-viewmenu hidden-print\" ng-hide=\"view.getControlsHidden()\">\n" +
    "\n" +
    "            <div class=\"panel panel-primary pull-right\" style=\"padding: 3px; white-space: nowrap; margin-bottom: 6px; margin-left: 6px;\">\n" +
    "\n" +
    "                <div ng-if=\"cvOptions.undoEnabled\" class=\"btn-group\" role=\"group\" ng-controller=\"CubesViewerViewsUndoController\">\n" +
    "                  <button type=\"button\" ng-click=\"undo()\" ng-disabled=\"view.undoPos <= 0\" class=\"btn btn-default btn-sm\" title=\"Undo\"><i class=\"fa fa-fw fa-undo\"></i></button>\n" +
    "                  <button type=\"button\" ng-click=\"redo()\" ng-disabled=\"view.undoPos >= view.undoList.length - 1\" class=\"btn btn-default btn-sm\" title=\"Redo\"><i class=\"fa fa-fw fa-undo fa-flip-horizontal\"></i></button>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"btn-group\" role=\"group\" aria-label=\"...\" style=\"margin-left: 5px;\">\n" +
    "                  <button type=\"button\" ng-click=\"setViewMode('explore')\" ng-class=\"{'active': view.params.mode == 'explore'}\" class=\"btn btn-primary btn-sm explorebutton\" title=\"Explore\"><i class=\"fa fa-fw fa-arrow-circle-down\"></i></button>\n" +
    "                  <button type=\"button\" ng-click=\"setViewMode('facts')\" ng-class=\"{'active': view.params.mode == 'facts'}\" class=\"btn btn-primary btn-sm \" title=\"Facts\"><i class=\"fa fa-fw fa-th\"></i></button>\n" +
    "                  <button type=\"button\" ng-click=\"setViewMode('series')\" ng-class=\"{'active': view.params.mode == 'series'}\" class=\"btn btn-primary btn-sm \" title=\"Series\"><i class=\"fa fa-fw fa-clock-o\"></i></button>\n" +
    "                  <button type=\"button\" ng-click=\"setViewMode('chart')\" ng-class=\"{'active': view.params.mode == 'chart'}\" class=\"btn btn-primary btn-sm \" title=\"Charts\"><i class=\"fa fa-fw fa-area-chart\"></i></button>\n" +
    "                </div>\n" +
    "\n" +
    "                <div ng-include=\"'views/cube/cube-menu-drilldown.html'\" class=\"dropdown m-b\" style=\"display: inline-block; margin-left: 5px;\"></div>\n" +
    "\n" +
    "                <div ng-include=\"'views/cube/cube-menu-filter.html'\" class=\"dropdown m-b\" style=\"display: inline-block; margin-left: 2px;\"></div>\n" +
    "\n" +
    "                <div ng-include=\"'views/cube/cube-menu-view.html'\" class=\"dropdown m-b\" style=\"display: inline-block; margin-left: 5px;\"></div>\n" +
    "\n" +
    "                <div ng-if=\"cvOptions.container\" ng-include=\"'views/cube/cube-menu-panel.html'\" class=\"dropdown m-b\" style=\"display: inline-block; margin-left: 5px;\"></div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"pull-right\" style=\"white-space: nowrap; padding-top: 4px; padding-bottom: 4px; margin-left: 6px; margin-bottom: 6px;\">\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"cv-view-viewinfo\">\n" +
    "            <div>\n" +
    "                <div class=\"label label-secondary cv-infopiece cv-view-viewinfo-cubename\" style=\"color: white; background-color: black;\">\n" +
    "                    <span><i class=\"fa fa-fw fa-cube\" title=\"Cube\"></i> <b class=\"hidden-xs hidden-sm\">Куб:</b> {{ view.cube.label }}</span>\n" +
    "                    <button type=\"button\" class=\"btn btn-info btn-xs\" style=\"visibility: hidden;\"><i class=\"fa fa-fw fa-info\"></i></button>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"cv-view-viewinfo-drill\">\n" +
    "\n" +
    "\n" +
    "                    <div ng-repeat=\"drilldown in view.params.drilldown\" ng-init=\"parts = view.cube.dimensionParts(drilldown);\" ng-if=\"view.params.mode != 'facts'\" class=\"label label-secondary cv-infopiece cv-view-viewinfo-drill\" style=\"color: black; background-color: #ccffcc;\">\n" +
    "                      <span><i class=\"fa fa-fw fa-arrow-down\" title=\"Drilldown\"></i> <b class=\"hidden-xs hidden-sm\">Развертка:</b> <span title=\"{{ view.cube.dimensionParts(drilldown).label }}\">{{ parts.labelShort }}</span></span>\n" +
    "                        <button type=\"button\" class=\"btn btn-info btn-xs\" style=\"visibility: hidden; margin-left: -20px;\"><i class=\"fa fa-fw fa-info\"></i></button>\n" +
    "\n" +
    "                        <button ng-hide=\"view.getControlsHidden() || parts.hierarchy.levels.length < 2\" ng-disabled=\"! parts.drilldownDimensionMinus\" type=\"button\" ng-click=\"selectDrill(parts.drilldownDimensionMinus, true)\" class=\"btn btn-secondary btn-xs hidden-print\" style=\"margin-left: 3px;\"><i class=\"fa fa-fw fa-minus\"></i></button>\n" +
    "                        <button ng-hide=\"view.getControlsHidden() || parts.hierarchy.levels.length < 2\" ng-disabled=\"! parts.drilldownDimensionPlus\" type=\"button\" ng-click=\"selectDrill(parts.drilldownDimensionPlus, true)\" class=\"btn btn-secondary btn-xs hidden-print\" style=\"margin-left: 0px;\"><i class=\"fa fa-fw fa-plus\"></i></button>\n" +
    "\n" +
    "                        <button ng-hide=\"view.getControlsHidden()\" type=\"button\" ng-click=\"showDimensionFilter(drilldown)\" class=\"btn btn-secondary btn-xs hidden-print\" style=\"margin-left: 3px;\"><i class=\"fa fa-fw fa-search\"></i></button>\n" +
    "                        <button ng-hide=\"view.getControlsHidden()\" type=\"button\" ng-click=\"selectDrill(drilldown, '')\" class=\"btn btn-danger btn-xs hidden-print\" style=\"margin-left: 1px;\"><i class=\"fa fa-fw fa-trash\"></i></button>\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "                <div class=\"cv-view-viewinfo-cut\">\n" +
    "                    <!--\n" +
    "                        var dimensionString = $(this).parents('.cv-view-infopiece-cut').first().attr('data-dimension');\n" +
    "                        var parts = view.cube.dimensionParts(dimensionString);\n" +
    "                        var depth = $(this).parents('.cv-view-infopiece-cut').first().attr('data-value').split(';')[0].split(\",\").length;\n" +
    "                        cubesviewer.views.cube.dimensionfilter.drawDimensionFilter(view, dimensionString + \":\" + parts.hierarchy.levels[depth - 1] );\n" +
    "                     -->\n" +
    "                    <div ng-repeat=\"cut in view.params.cuts\" ng-init=\"equality = cut.invert ? ' &ne; ' : ' = ';\" class=\"label label-secondary cv-infopiece cv-view-viewinfo-cut\" style=\"color: black; background-color: #ffcccc;\">\n" +
    "                        <span style=\"max-width: 480px;\"><i class=\"fa fa-fw fa-filter\" title=\"Filter\"></i> <b class=\"hidden-xs hidden-sm\">Filter:</b> <span title=\"{{ view.cube.dimensionPartsFromCut(cut).label }}\">{{ view.cube.dimensionPartsFromCut(cut).labelShort }}</span> <span ng-class=\"{ 'text-danger': cut.invert }\">{{ equality }}</span> <span title=\"{{ cut.value }}\">{{ cut.value }}</span></span>\n" +
    "                        <button type=\"button\" class=\"btn btn-info btn-xs\" style=\"visibility: hidden; margin-left: -20px;\"><i class=\"fa fa-fw fa-info\"></i></button>\n" +
    "                        <button ng-hide=\"view.getControlsHidden()\" type=\"button\" ng-click=\"showDimensionFilter(view.cube.dimensionPartsFromCut(cut).drilldownDimension)\" class=\"btn btn-secondary btn-xs hidden-print\" style=\"margin-left: 3px;\"><i class=\"fa fa-fw fa-search\"></i></button>\n" +
    "                        <button ng-hide=\"view.getControlsHidden()\" type=\"button\" ng-click=\"selectCut(cut.dimension, '', cut.invert)\" class=\"btn btn-danger btn-xs hidden-print\" style=\"margin-left: 1px;\"><i class=\"fa fa-fw fa-trash\"></i></button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div ng-include=\"'views/cube/filter/datefilter.html'\"></div>\n" +
    "\n" +
    "                <div class=\"cv-view-viewinfo-extra\">\n" +
    "\n" +
    "                    <div ng-if=\"view.params.mode == 'series' || view.params.mode == 'chart'\" class=\"label label-secondary cv-infopiece cv-view-viewinfo-extra\" style=\"color: black; background-color: #ccccff;\">\n" +
    "                      <span style=\"max-width: 350px;\"><i class=\"fa fa-fw fa-crosshairs\" title=\"Measure\"></i> <b class=\"hidden-xs hidden-sm\">Значение:</b> {{ (view.params.yaxis != null) ? view.cube.aggregateFromName(view.params.yaxis).label : \"Нет\" }}</span>\n" +
    "                        <button type=\"button\" class=\"btn btn-info btn-xs\" style=\"visibility: hidden; margin-left: -20px;\"><i class=\"fa fa-fw fa-info\"></i></button>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div ng-if=\"view.params.mode == 'series' || view.params.mode == 'chart'\" class=\"label label-secondary cv-infopiece cv-view-viewinfo-extra\" style=\"color: black; background-color: #ccddff;\">\n" +
    "                      <span style=\"max-width: 350px;\"><i class=\"fa fa-fw fa-long-arrow-right\" title=\"Horizontal dimension\"></i> <b class=\"hidden-xs hidden-sm\">Горизонтальное измерение:</b> {{ (view.params.xaxis != null) ? view.cube.dimensionParts(view.params.xaxis).labelShort : \"Нет\" }}</span>\n" +
    "                        <button type=\"button\" class=\"btn btn-info btn-xs\" style=\"visibility: hidden; margin-left: -20px;\"><i class=\"fa fa-fw fa-info\"></i></button>\n" +
    "\n" +
    "                        <button ng-hide=\"view.getControlsHidden() || !view.params.xaxis || view.cube.dimensionParts(view.params.xaxis).hierarchy.levels.length < 2\" ng-disabled=\"! view.cube.dimensionParts(view.params.xaxis).drilldownDimensionMinus\" type=\"button\" ng-click=\"selectXAxis(view.cube.dimensionParts(view.params.xaxis).drilldownDimensionMinus, true)\" class=\"btn btn-secondary btn-xs hidden-print\" style=\"margin-left: 3px;\"><i class=\"fa fa-fw fa-minus\"></i></button>\n" +
    "                        <button ng-hide=\"view.getControlsHidden() || !view.params.xaxis || view.cube.dimensionParts(view.params.xaxis).hierarchy.levels.length < 2\" ng-disabled=\"! view.cube.dimensionParts(view.params.xaxis).drilldownDimensionPlus\" type=\"button\" ng-click=\"selectXAxis(view.cube.dimensionParts(view.params.xaxis).drilldownDimensionPlus, true)\" class=\"btn btn-secondary btn-xs hidden-print\" style=\"margin-left: 0px;\"><i class=\"fa fa-fw fa-plus\"></i></button>\n" +
    "\n" +
    "                        <!-- <button type=\"button\" ng-click=\"showDimensionFilter(view.params.xaxis)\" class=\"btn btn-secondary btn-xs\" style=\"margin-left: 3px;\"><i class=\"fa fa-fw fa-search\"></i></button>  -->\n" +
    "                        <!-- <button type=\"button\" ng-click=\"selectXAxis(null)\" class=\"btn btn-danger btn-xs\" style=\"margin-left: 1px;\"><i class=\"fa fa-fw fa-trash\"></i></button>  -->\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"clearfix\"></div>\n" +
    "\n" +
    "        <div class=\"cv-view-viewdialogs\">\n" +
    "            <div ng-if=\"view.dimensionFilter\" ng-include=\"'views/cube/filter/dimension.html'\"></div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"cv-view-viewdata\">\n" +
    "\n" +
    "            <div ng-if=\"view.params.mode == 'explore'\" ng-include=\"'views/cube/explore/explore.html'\"></div>\n" +
    "            <div ng-if=\"view.params.mode == 'facts'\" ng-include=\"'views/cube/facts/facts.html'\"></div>\n" +
    "            <div ng-if=\"view.params.mode == 'series'\" ng-include=\"'views/cube/series/series.html'\"></div>\n" +
    "            <div ng-if=\"view.params.mode == 'chart'\" ng-include=\"'views/cube/chart/chart.html'\"></div>\n" +
    "\n" +
    "        </div>\n" +
    "        <div class=\"clearfix\"></div>\n" +
    "\n" +
    "        <div class=\"cv-view-viewfooter\"></div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('views/cube/explore/explore.html',
    "<div ng-controller=\"CubesViewerViewsCubeExploreController\">\n" +
    "\n" +
    "    <!-- ($(view.container).find('.cv-view-viewdata').children().size() == 0)  -->\n" +
    "    <h3><i class=\"fa fa-fw fa-arrow-circle-down\"></i> Аггрегаты\n" +
    "        <i ng-show=\"view.pendingRequests > 0\" class=\"fa fa-circle-o-notch fa-spin fa-fw margin-bottom text-info pull-right\"></i>\n" +
    "    </h3>\n" +
    "\n" +
    "    <div ng-if=\"view.pendingRequests > 0\" class=\"loadingbar-content\">\n" +
    "        <span class=\"loadingbar-expand\"></span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ui-grid=\"view.grid\"\n" +
    "         ui-grid-resize-columns ui-grid-move-columns ui-grid-selection ui-grid-auto-resize\n" +
    "         ui-grid-pagination ui-grid-pinning\n" +
    "         style=\"width: 100%;\" ng-style=\"{height: ((view.grid.data.length < 15 ? view.grid.data.length : 15) * 24) + 44 + 30 + 'px'}\">\n" +
    "    </div>\n" +
    "    <div style=\"height: 30px;\">&nbsp;</div>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('views/cube/facts/facts.html',
    "<div ng-controller=\"CubesViewerViewsCubeFactsController\">\n" +
    "\n" +
    "    <!-- ($(view.container).find('.cv-view-viewdata').children().size() == 0)  -->\n" +
    "    <h3><i class=\"fa fa-fw fa-th\"></i> Факты\n" +
    "        <i ng-show=\"view.pendingRequests > 0\" class=\"fa fa-circle-o-notch fa-spin fa-fw margin-bottom text-info pull-right\"></i>\n" +
    "    </h3>\n" +
    "\n" +
    "    <div ng-if=\"view.pendingRequests > 0\" class=\"loadingbar-content\">\n" +
    "        <span class=\"loadingbar-expand\"></span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-if=\"view.grid.data.length > 0\"\n" +
    "         ui-grid=\"view.grid\"\n" +
    "         ui-grid-resize-columns ui-grid-move-columns ui-grid-selection ui-grid-auto-resize\n" +
    "         ui-grid-pagination ui-grid-pinning\n" +
    "         style=\"width: 100%;\" ng-style=\"{height: ((view.grid.data.length < 15 ? view.grid.data.length : 15) * 24) + 44 + 30 + 'px'}\">\n" +
    "    </div>\n" +
    "    <div ng-if=\"view.grid.data.length > 0\" style=\"height: 30px;\">&nbsp;</div>\n" +
    "\n" +
    "    <div ng-if=\"viewController.view.pendingRequests == 0 && view.grid.data.length == 0\">Нет фактов.</div>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('views/cube/filter/datefilter.html',
    "<div class=\"cv-view-viewinfo-date\">\n" +
    "    <div ng-repeat=\"datefilter in view.params.datefilters\" ng-controller=\"CubesViewerViewsCubeFilterDateController\" ng-init=\"dimparts = view.cube.dimensionParts(datefilter.dimension);\" class=\"label label-secondary cv-infopiece cv-view-viewinfo-cut text-left\" style=\"color: black; background-color: #ffdddd; text-align: left;\">\n" +
    "        <span style=\"max-width: 280px; white-space: nowrap;\"><i class=\"fa fa-fw fa-filter\"></i> <b class=\"hidden-xs hidden-sm\">Filter:</b> {{ dimparts.labelNoLevel }}:</span>\n" +
    "\n" +
    "        <!--\n" +
    "        <br class=\"hidden-sm hidden-md hidden-lg\" />\n" +
    "        <i class=\"fa fa-fw hidden-sm hidden-md hidden-lg\" />\n" +
    "         -->\n" +
    "\n" +
    "        <div class=\"cv-datefilter\" style=\"overflow: visible; display: inline-block;\">\n" +
    "\n" +
    "            <form class=\"form-inline\">\n" +
    "\n" +
    "                 <div class=\"form-group\" style=\"display: inline-block; margin: 0px;\">\n" +
    "                    <div class=\"dropdown\" style=\"display: inline-block;\">\n" +
    "                      <button ng-hide=\"view.getControlsHidden()\" style=\"height: 20px;\" class=\"btn btn-default btn-sm dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" data-submenu>\n" +
    "                        <i class=\"fa fa-fw fa-calendar\"></i> {{ datefilter.mode | datefilterMode }} <span class=\"caret\"></span>\n" +
    "                      </button>\n" +
    "                      <span ng-show=\"view.getControlsHidden()\"><i class=\"fa fa-fw fa-calendar\"></i> {{ datefilter.mode | datefilterMode }}</span>\n" +
    "\n" +
    "                      <ul class=\"dropdown-menu cv-view-menu cv-view-menu-view\">\n" +
    "                        <li ng-click=\"setMode('custom')\"><a><i class=\"fa fa-fw\"></i> Custom</a></li>\n" +
    "                        <div class=\"divider\"></div>\n" +
    "                        <li ng-click=\"setMode('auto-last1m')\"><a><i class=\"fa fa-fw\"></i> Last month</a></li>\n" +
    "                        <li ng-click=\"setMode('auto-last3m')\"><a><i class=\"fa fa-fw\"></i> Last 3 months</a></li>\n" +
    "                        <li ng-click=\"setMode('auto-last6m')\"><a><i class=\"fa fa-fw\"></i> Last 6 months</a></li>\n" +
    "                        <li ng-click=\"setMode('auto-last12m')\"><a><i class=\"fa fa-fw\"></i> Last year</a></li>\n" +
    "                        <li ng-click=\"setMode('auto-last24m')\"><a><i class=\"fa fa-fw\"></i> Last 2 years</a></li>\n" +
    "                        <li ng-click=\"setMode('auto-january1st')\"><a><i class=\"fa fa-fw\"></i> From January 1st</a></li>\n" +
    "                        <li ng-click=\"setMode('auto-yesterday')\"><a><i class=\"fa fa-fw\"></i> Yesterday</a></li>\n" +
    "                      </ul>\n" +
    "                  </div>\n" +
    "                 </div>\n" +
    "\n" +
    "            <div ng-show=\"datefilter.mode == 'custom'\" style=\"display: inline-block; margin: 0px;\">\n" +
    "\n" +
    "                 &rArr;\n" +
    "\n" +
    "                 <div class=\"form-group\" style=\"display: inline-block; margin: 0px;\">\n" +
    "                    <p class=\"input-group disabled\" style=\"margin: 0px; display: inline-block;\">\n" +
    "                      <input ng-disabled=\"view.getControlsHidden()\" autocomplete=\"off\" type=\"text\" style=\"height: 20px; width: 80px; display: inline-block;\" class=\"form-control input-sm\" uib-datepicker-popup=\"yyyy-MM-dd\" ng-model=\"dateStart.value\" is-open=\"dateStart.opened\" datepicker-options=\"dateStart.options\" ng-required=\"true\" close-text=\"Close\" />\n" +
    "                      <span ng-hide=\"view.getControlsHidden()\"  class=\"input-group-btn\" style=\"display: inline-block;\">\n" +
    "                        <button type=\"button\" style=\"height: 20px;\" class=\"btn btn-default\" ng-click=\"dateStartOpen()\"><i class=\"fa fa-fw fa-calendar\"></i></button>\n" +
    "                      </span>\n" +
    "                    </p>\n" +
    "                </div>\n" +
    "\n" +
    "                <span ng-hide=\"view.getControlsHidden()\" style=\"margin-left: 17px; margin-right: 0px;\">-</span>\n" +
    "                <span ng-show=\"view.getControlsHidden()\" style=\"margin-left: 0px; margin-right: 0px;\">-</span>\n" +
    "\n" +
    "                 <div class=\"form-group\" style=\"display: inline-block; margin: 0px;\">\n" +
    "                    <p class=\"input-group\" style=\"margin: 0px; display: inline-block;\">\n" +
    "                      <input ng-disabled=\"view.getControlsHidden()\" autocomplete=\"off\" type=\"text\" style=\"height: 20px; width: 80px; display: inline-block;\" class=\"form-control input-sm\" uib-datepicker-popup=\"yyyy-MM-dd\" ng-model=\"dateEnd.value\" is-open=\"dateEnd.opened\" datepicker-options=\"dateEnd.options\" ng-required=\"true\" close-text=\"Close\" />\n" +
    "                      <span ng-hide=\"view.getControlsHidden()\" class=\"input-group-btn\" style=\"display: inline-block;\">\n" +
    "                        <button type=\"button\" style=\"height: 20px;\" class=\"btn btn-default\" ng-click=\"dateEndOpen()\"><i class=\"fa fa-fw fa-calendar\"></i></button>\n" +
    "                      </span>\n" +
    "                    </p>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "        </form>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <button type=\"button\" ng-hide=\"view.getControlsHidden()\" ng-click=\"selectDateFilter(datefilter.dimension, false)\" class=\"btn btn-danger btn-xs\" style=\"margin-left: 20px;\"><i class=\"fa fa-fw fa-trash\"></i></button>\n" +
    "        <button type=\"button\" class=\"btn btn-info btn-xs\" style=\"visibility: hidden; margin-left: -20px;\"><i class=\"fa fa-fw fa-info\"></i></button>\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n"
  );


  $templateCache.put('views/cube/filter/dimension.html',
    "<div ng-controller=\"CubesViewerViewsCubeFilterDimensionController\">\n" +
    "\n" +
    "    <div class=\"panel panel-default panel-outline hidden-print\" ng-hide=\"view.getControlsHidden()\" style=\"border-color: #ffcccc;\">\n" +
    "        <div class=\"panel-heading clearfix\" style=\"border-color: #ffcccc;\">\n" +
    "            <button class=\"btn btn-xs btn-danger pull-right\" ng-click=\"closeDimensionFilter()\"><i class=\"fa fa-fw fa-close\"></i></button>\n" +
    "            <h4 style=\"margin: 2px 0px 0px 0px;\"><i class=\"fa fa-fw fa-filter\"></i> Dimension filter: <b>{{ parts.label }}</b></h4>\n" +
    "        </div>\n" +
    "        <div class=\"panel-body\">\n" +
    "\n" +
    "            <div >\n" +
    "            <form >\n" +
    "\n" +
    "              <div class=\"form-group has-feedback\" style=\"display: inline-block; margin-bottom: 0; vertical-align: middle; margin-bottom: 2px;\">\n" +
    "                <!-- <label for=\"search\">Search:</label>  -->\n" +
    "                <input type=\"text\" class=\"form-control\" ng-model=\"searchString\" ng-model-options=\"{ debounce: 300 }\" placeholder=\"Search...\" style=\"width: 16em;\">\n" +
    "                <i class=\"fa fa-fw fa-times-circle form-control-feedback\" ng-click=\"searchString = ''\" style=\"cursor: pointer; pointer-events: inherit;\"></i>\n" +
    "              </div>\n" +
    "\n" +
    "              <div class=\"btn-group\" style=\"margin-left: 10px; display: inline-block; vertical-align: middle; margin-bottom: 2px; margin-right: 5px;\">\n" +
    "                    <button class=\"btn btn-default\" ng-click=\"selectAll();\" type=\"button\" title=\"Select all\"><i class=\"fa fa-fw fa-check-square-o\"></i></button>\n" +
    "                    <button class=\"btn btn-default\" ng-click=\"selectNone();\" type=\"button\" title=\"Select none\"><i class=\"fa fa-fw fa-square-o\"></i></button>\n" +
    "              </div>\n" +
    "\n" +
    "<!--               <div class=\"form-group\" style=\"display: inline-block; margin-bottom: 0; vertical-align: middle; margin-bottom: 2px;\"> -->\n" +
    "              <div class=\"btn-group\" style=\"display: inline-block; vertical-align: middle; margin-bottom: 2px; margin-right: 5px;\">\n" +
    "                    <button ng-hide=\"parts.hierarchy.levels.length < 2\" ng-disabled=\"! parts.drilldownDimensionMinus\"  class=\"btn btn-default\" ng-click=\"showDimensionFilter(parts.drilldownDimensionMinus)\" type=\"button\" title=\"Drilldown less\"><i class=\"fa fa-fw fa-minus\"></i></button>\n" +
    "                    <button ng-hide=\"parts.hierarchy.levels.length < 2\" ng-disabled=\"! parts.drilldownDimensionPlus\"  class=\"btn btn-default\" ng-click=\"showDimensionFilter(parts.drilldownDimensionPlus)\" type=\"button\" title=\"Drilldown more\"><i class=\"fa fa-fw fa-plus\"></i></button>\n" +
    "                    <button class=\"btn btn-default\" type=\"button\" title=\"Drilldown this\" ng-click=\"selectDrill(parts.drilldownDimension, true)\"><i class=\"fa fa-fw fa-arrow-down\"></i></button>\n" +
    "              </div>\n" +
    "\n" +
    "              <div class=\"form-group\" style=\"display: inline-block; margin-bottom: 0; vertical-align: middle; margin-bottom: 2px; margin-right: 5px;\">\n" +
    "                 <div class=\"btn btn-default\" ng-click=\"filterShowAll = ! filterShowAll\" ng-class=\"{ 'active': filterShowAll, 'btn-info': filterShowAll }\">\n" +
    "                    <i class=\"fa fa-fw fa-filter fa-rotate-180\"></i> Show all\n" +
    "                 </div>\n" +
    "              </div>\n" +
    "\n" +
    "              <div class=\"form-group\" style=\"display: inline-block; margin-bottom: 0; vertical-align: middle; margin-bottom: 2px; \">\n" +
    "\n" +
    "                  <div class=\"btn btn-default\" ng-click=\"filterInverted = !filterInverted\" ng-class=\"{ 'active': filterInverted, 'btn-danger': filterInverted }\">\n" +
    "                    <input type=\"checkbox\" ng-model=\"filterInverted\" style=\"pointer-events: none; margin: 0px; vertical-align: middle;\" ></input>\n" +
    "                    <b>&ne;</b> Invert\n" +
    "                  </div>\n" +
    "\n" +
    "              </div>\n" +
    "\n" +
    "                <div class=\"form-group\" style=\"display: inline-block; margin-bottom: 0; vertical-align: middle; margin-bottom: 2px;\">\n" +
    "                 <button ng-click=\"applyFilter()\" class=\"btn btn-success\" type=\"button\"><i class=\"fa fa-fw fa-filter\"></i> Apply</button>\n" +
    "              </div>\n" +
    "            </form>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"clearfix\"></div>\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-xs-9 col-sm-6\">\n" +
    "                <div style=\"margin-top: 5px;\">\n" +
    "                    <div class=\"panel panel-default panel-outline\" style=\"margin-bottom: 0px; \"><div class=\"panel-body\" style=\"max-height: 180px; overflow-y: auto; overflow-x: hidden;\">\n" +
    "                        <div ng-show=\"loadingDimensionValues\" ><i class=\"fa fa-circle-o-notch fa-spin fa-fw\"></i> Loading...</div>\n" +
    "\n" +
    "                        <div ng-if=\"!loadingDimensionValues\">\n" +
    "                            <div ng-repeat=\"val in dimensionValues | filter:filterDimensionValue(searchString)\" style=\"overflow-x: hidden; text-overflow: ellipsis; white-space: nowrap;\">\n" +
    "                                <label style=\"font-weight: normal; margin-bottom: 2px;\">\n" +
    "                                    <input type=\"checkbox\" name=\"selectedValues[]\" ng-model=\"val.selected\" value=\"{{ ::val.value }}\" style=\"vertical-align: bottom;\" />\n" +
    "                                    <span title=\"{{ val.label }}\">{{ ::val.label }}</span>\n" +
    "                                </label>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                    </div></div>\n" +
    "\n" +
    "                    <div ng-if=\"!loadingDimensionValues\" class=\"\" style=\"margin-bottom: 0px; \">\n" +
    "                        <div class=\"text-right\">\n" +
    "                            {{ dimensionValues.length }} items\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div ng-if=\"!loadingDimensionValues && dimensionValues.length >= cubesService.cubesserver.info.json_record_limit\" class=\"alert alert-warning\" style=\"margin-bottom: 0px;\">\n" +
    "                        <div style=\"display: inline-block;\"><i class=\"fa fa-exclamation\"></i></div>\n" +
    "                        <div style=\"display: inline-block; margin-left: 20px;\">\n" +
    "                            Limit of {{ cubesService.cubesserver.info.json_record_limit }} items has been hit. Dimension value list is <b>incomplete</b>.<br />\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"clearfix\"></div>\n" +
    "\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('views/cube/series/series.html',
    "<div ng-controller=\"CubesViewerViewsCubeSeriesController\">\n" +
    "\n" +
    "    <!-- ($(view.container).find('.cv-view-viewdata').children().size() == 0)  -->\n" +
    "    <h3><i class=\"fa fa-fw fa-clock-o\"></i> Ряды\n" +
    "        <i ng-show=\"view.pendingRequests > 0\" class=\"fa fa-circle-o-notch fa-spin fa-fw margin-bottom text-info pull-right\"></i>\n" +
    "    </h3>\n" +
    "\n" +
    "    <div ng-if=\"view.pendingRequests > 0\" class=\"loadingbar-content\">\n" +
    "        <span class=\"loadingbar-expand\"></span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-if=\"view.grid.data.length > 0\"\n" +
    "         ui-grid=\"view.grid\"\n" +
    "         ui-grid-resize-columns ui-grid-move-columns ui-grid-selection ui-grid-auto-resize\n" +
    "         ui-grid-pagination ui-grid-pinning\n" +
    "         style=\"width: 100%;\" ng-style=\"{height: ((view.grid.data.length < 15 ? view.grid.data.length : 15) * 24) + 44 + 30 + 'px'}\">\n" +
    "    </div>\n" +
    "    <div ng-if=\"view.grid.data.length > 0\" style=\"height: 30px;\">&nbsp;</div>\n" +
    "\n" +
    "    <div ng-if=\"view.pendingRequests == 0 && view.params.yaxis == null\" class=\"alert alert-info\" style=\"margin-bottom: 0px;\">\n" +
    "        <p>\n" +
    "          Невозможно отобразить ряд: <b>значение</b> не выбрано.\n" +
    "        </p>\n" +
    "        <p>\n" +
    "          Подсказка: используйте меню <kbd><i class=\"fa fa-fw fa-cogs\"></i> Вид &gt; <i class=\"fa fa-fw fa-crosshairs\"></i> Значение</kbd>.\n" +
    "        </p>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-if=\"view.pendingRequests == 0 && view.params.yaxis != null && view.grid.data.length == 0\" class=\"alert alert-info\" style=\"margin-bottom: 0px;\">\n" +
    "        <p>\n" +
    "          Невозможно отобразить ряд: <b>недостаточно строк</b>.\n" +
    "        </p>\n" +
    "        <p>\n" +
    "          Подсказка: используйте меню <kbd><i class=\"fa fa-fw fa-cogs\"></i> Вид</kbd> чтобы выбрать горизонтальное изменение.\n" +
    "        </p>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n"
  );

}]);
