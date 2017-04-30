package fi.gosu.ika.stats.controller;

import fi.gosu.ika.stats.domain.SpyReport;
import fi.gosu.ika.stats.exceptions.SpyReportDeleteForbiddenException;
import fi.gosu.ika.stats.service.SpyReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * SpyReport Controller
 *
 * Created by Joppe151617 on 30.4.2017.
 *
 */
@RestController
@RequestMapping("/spyreport/")
public class SpyReportController {

    @Autowired
    private SpyReportService spyReportService;

    @RequestMapping(method = RequestMethod.GET)
    public List<SpyReport> getAll() {
        return spyReportService.findAll();
    }

    @RequestMapping(method = RequestMethod.POST)
    public SpyReport addSpyReport(@RequestBody SpyReport spyReport) {
        return spyReportService.addSpyReport(spyReport);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.GET)
    public SpyReport getOne(@PathVariable Long id) {
        return spyReportService.findOne(id);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
    public SpyReport delete(@PathVariable Long id) {
        throw new SpyReportDeleteForbiddenException();
    }
}
