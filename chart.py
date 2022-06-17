import matplotlib.pyplot as plt
import matplotlib.dates as mdates
from matplotlib import ticker
from matplotlib.dates import DateFormatter

from datetime import date

text_color = "#550000"
background_color = "#ffdddd00"
marker_color = "#330000"
grid_color = "#550000"

finishing_dates = [
    date(2022, 3, 29),  # When Rocketseat Explorer course started
    date(2022, 4, 13),  # When I finished Stage 02
    date(2022, 5, 26),  # When I finished Stage 03
    date(2022, 5, 30),  # When I finished Stage 04
    date(2022, 6, 17),  # When I finished Stage 05
    date(2022, 7, 15),  # Expected to finish Stage 06
]

accumulated_progress = [0, .2, .3, .4, .5, .6]

fig, ax = plt.subplots(1, 1, dpi=300)

fig.set_facecolor(background_color)

date_form = DateFormatter("%b-%d")
ax.xaxis.set_major_formatter(date_form)
ax.xaxis.set_major_locator(
    ticker.FixedLocator(
        [mdates.date2num(finishing_date) for finishing_date in finishing_dates]
    )
)

ax.spines.right.set_visible(False)
ax.spines.top.set_visible(False)
ax.spines.left.set_color(text_color)
ax.spines.bottom.set_color(text_color)

ax.yaxis.set_major_formatter(ticker.PercentFormatter(xmax=1))
ax.yaxis.set_major_locator(ticker.FixedLocator(accumulated_progress))

ax.plot(
    finishing_dates, accumulated_progress, '-', c=marker_color,
    linewidth=2, marker='o'
)
ax.set_facecolor(background_color)
ax.tick_params(axis='x', colors=text_color)
ax.tick_params(axis='y', colors=text_color)

text_font = {
    'family': 'sans-serif',
    'color': text_color,
    'size': 12
}

ax.text(
    mdates.date2num(finishing_dates[0]) + 3, accumulated_progress[0] + 0.01, 'course start!',
    fontdict=text_font
)
ax.text(
    mdates.date2num(finishing_dates[1]) - 12, accumulated_progress[1] + 0.01, 'stage 02',
    fontdict=text_font
)
ax.text(
    mdates.date2num(finishing_dates[2]) - 12, accumulated_progress[2] + 0.01, 'stage 03',
    fontdict=text_font
)
ax.text(
    mdates.date2num(finishing_dates[3]) - 12, accumulated_progress[3] + 0.01, 'stage 04',
    fontdict=text_font
)
ax.text(
    mdates.date2num(finishing_dates[4]) - 12, accumulated_progress[4] + 0.01, 'stage 05',
    fontdict=text_font
)
ax.text(
    mdates.date2num(finishing_dates[5]) - 16, accumulated_progress[5] + 0.005, 'in progress...',
    fontdict=text_font
)

plt.xlabel('Study period', color=text_color)
plt.ylabel('Progress', color=text_color)

# plt.axis("off")
plt.tight_layout()

plt.savefig("chart.png", dpi=300)

# plt.show()
# plt
