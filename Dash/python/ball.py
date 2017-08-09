colors=['rgb(53,195,176)',
'rgb(168,201,121)',
'rgb(255,210,181)',
'rgb(255,169,164)',
'rgb(255,140,148)']

points=points_sphere(N=100)
data2=get_data(points,  R=1.005, arcs=False, colorscale=[], colors=colors)

fig2 = Figure(data=data2, layout=plot_layout(ax=noaxis))
fig2['layout'].update(title='Polyhedral approximation of a spherical Voronoi diagram')
py.iplot(fig2, filename='polyhedral-voronoi')