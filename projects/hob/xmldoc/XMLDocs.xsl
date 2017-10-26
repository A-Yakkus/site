<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
<html>
<head>
	<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css" />
	<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
</head>
<body>
<main>
	<div class="row">
		<div class="col s12">
      			<ul class="tabs cyan">
				<xsl:for-each select="XMLDocs/class">
					<li class="tab white-text">
						<a>
							<xsl:attribute name="href">
								#<xsl:value-of select="name"/>
							</xsl:attribute>
							<xsl:value-of select="name"/>
						</a>
					</li>
				</xsl:for-each>
 			</ul>
		</div>
	</div>
	<xsl:for-each select="XMLDocs/class">
		<div>
			<xsl:attribute name="id">
				<xsl:value-of select="name"/>
			</xsl:attribute>
			<ul class="collapsible" data-collapsible="accordion">
				<xsl:for-each select="XMLDocs/class/">
		<li>
			<xsl:choose>	
				<xsl:when test="local-name()">
					<div class="collapsible-header disabled"><xsl:value-of select="local-name()"/></div>
      				        <div class="collapsible-body disabled"></div>
	  			</xsl:when>
				<xsl:otherwise>
				<div class="collapsible-header"><xsl:value-of select="local-name()"/></div>
      				<div class="collapsible-body">
					hi
				</div>
				</xsl:otherwise>
			</xsl:choose>
			</li>
		</xsl:for-each>
			</ul>	
		</div>
	</xsl:for-each>
</main>
</body>
</html>
</xsl:template>

</xsl:stylesheet>
