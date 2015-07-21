# custom-validation

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.12.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

NavProgressBar as name suggests is a widget to easily add a progress bar which supports Sections and Sub-section(also referred as Pages).
<div><br>
</div>
<div>Demo<br>
<div><br>
</div>
<div><b>Usage:</b></div>
<div>1) Project can be downloaded from&nbsp;https://github.com/abhi05b/progress-bar.git or can be added in bower.json.</div>
<div>2) Inject 'navProgressBarApp' in your module.</div>
<div>3) In template use directive&nbsp;</div>
<div>
<div><span style="white-space:pre">	</span></div>
</div>
<div>
<div>
<pre style="overflow:auto;margin-top:0px;margin-bottom:16px;font-stretch:normal;padding:16px;border-radius:3px;word-wrap:normal;background-color:rgb(247,247,247)"><span style="background-color:transparent;font-size:13.6000003814697px;line-height:19.7200012207031px"><font color="#009933" face="Consolas, Liberation Mono, Menlo, Courier, monospace">&lt;nav-progress-bar navigation-sections="</font><font color="#990000" face="Consolas, Liberation Mono, Menlo, Courier, monospace">navigationSections</font><font color="#009933" face="Consolas, Liberation Mono, Menlo, Courier, monospace">" current-section="</font><font color="#990000" face="Consolas, Liberation Mono, Menlo, Courier, monospace">currentSection</font><font color="#009933" face="Consolas, Liberation Mono, Menlo, Courier, monospace">" current-page="</font><font color="#990000" face="Consolas, Liberation Mono, Menlo, Courier, monospace">currentPage</font><font color="#009933" face="Consolas, Liberation Mono, Menlo, Courier, monospace">" &gt;&lt;/nav-progress-bar&gt;</font></span></pre>
</div>
</div>
<div><b>navigationSections </b>should be an array of objects. eg:&nbsp;</div>
<div>
<div>
<pre style="overflow:auto;margin-top:0px;margin-bottom:16px;font-stretch:normal;padding:16px;border-radius:3px;word-wrap:normal;background-color:rgb(247,247,247)"><font color="#009933" face="Consolas, Liberation Mono, Menlo, Courier, monospace"><span style="font-size:13.6000003814697px;line-height:19.7200012207031px">[{label : 'Home',
  pages : 2
},
{label : 'Add Product',
  pages : 3
}];</span></font></pre>
</div>
<div>Each object in the array is a <b>Section</b>, and <b>pages </b>are number of sub-sections in &nbsp;a section.</div>
<div><b>currentSection </b>and <b>curentPage </b>are number denoting index of current section and current page starting from 1.</div>
</div>
<div><br>
</div>
<div>Images:</div>
<div>
<div style="display: block; text-align: left;"><a imageanchor="1" href="https://sites.google.com/site/uifrontenddoc/navprogressbar/NavProgressBarCheckout.png"><img src="/site/uifrontenddoc/navprogressbar/NavProgressBarCheckout.png" border="0" style="width: 100%;"></a></div>
<br>
</div>
<div>
<div style="display:block;text-align:left"></div>
&nbsp;</div>
<div><br>
</div>
<div><br>
</div>
</div>

